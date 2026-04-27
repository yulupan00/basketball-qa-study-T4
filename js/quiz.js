/**
 * Sports QA Human Study - T4 Free-Text Answer Interface
 * Uses localStorage for persistence and FormSpree for submission.
 */

(function () {
    // ============================================================
    // CONFIGURATION
    // ============================================================
    const FORMSPREE_URL = "https://formspree.io/f/maqlkowv";

    const sport = window.CURRENT_SPORT || "basketball";
    const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);
    const STORAGE_SESSION_KEY = "bqa_t4_" + sport + "_session";
    const STORAGE_ANSWERS_KEY = "bqa_t4_" + sport + "_answers";

    // ============================================================
    // State
    // ============================================================
    let currentIndex = 0;
    let answers = {};
    let typedAnswer = "";
    let selectedConfidence = null;
    let session = null;

    const AUTO_SAVE_INTERVAL = 30000;

    // ============================================================
    // DOM
    // ============================================================
    const videoPlayer = document.getElementById("videoPlayer");
    const videoLoading = document.getElementById("videoLoading");
    const videoError = document.getElementById("videoError");
    const categoryName = document.getElementById("categoryName");
    const categoryProgress = document.getElementById("categoryProgress");
    const questionNumber = document.getElementById("questionNumber");
    const questionText = document.getElementById("questionText");
    const answerInput = document.getElementById("answerInput");
    const submitBtn = document.getElementById("submitBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const finishBtn = document.getElementById("finishBtn");
    const progressText = document.getElementById("progressText");
    const progressBar = document.getElementById("progressBar");

    const TYPE_DISPLAY_NAMES = {
        "anomaly_novelty_detection": "Anomaly / Novelty Detection",
    };

    // ============================================================
    // Init
    // ============================================================
    function init() {
        const savedSession = localStorage.getItem(STORAGE_SESSION_KEY);
        if (!savedSession) {
            window.location.href = "start.html?sport=" + sport;
            return;
        }
        session = JSON.parse(savedSession);
        document.getElementById("navUserId").textContent = session.userId;
        document.getElementById("navTitle").textContent = sportName + " Video QA";

        const savedAnswers = localStorage.getItem(STORAGE_ANSWERS_KEY);
        if (savedAnswers) {
            answers = JSON.parse(savedAnswers);
        }

        // Find first unanswered question to resume
        for (let i = 0; i < QUESTIONS.length; i++) {
            const qId = String(QUESTIONS[i].id);
            if (!answers[qId] || !answers[qId].submitted) {
                currentIndex = i;
                break;
            }
            if (i === QUESTIONS.length - 1) {
                currentIndex = i;
            }
        }

        loadQuestion(currentIndex);
        updateProgress();

        submitBtn.addEventListener("click", handleSubmit);
        nextBtn.addEventListener("click", () => navigate(1));
        prevBtn.addEventListener("click", () => navigate(-1));
        finishBtn.addEventListener("click", handleFinish);

        answerInput.addEventListener("input", function () {
            typedAnswer = answerInput.value;
            updateSubmitState();
        });

        document.querySelectorAll(".confidence-btn").forEach((btn) => {
            btn.addEventListener("click", function () {
                if (btn.classList.contains("disabled")) return;
                document.querySelectorAll(".confidence-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                selectedConfidence = btn.dataset.confidence;
                updateSubmitState();
            });
        });

        setInterval(saveAnswers, AUTO_SAVE_INTERVAL);
    }

    function saveAnswers() {
        localStorage.setItem(STORAGE_ANSWERS_KEY, JSON.stringify(answers));
    }

    // ============================================================
    // Video
    // ============================================================
    function getVideoUrl(questionId) {
        const qId = String(questionId);
        let path = null;
        if (typeof VIDEO_MAPPING !== "undefined" && VIDEO_MAPPING[qId]) {
            path = VIDEO_MAPPING[qId];
        }
        if (!path) return null;
        const base = (typeof VIDEO_BASE_URL !== "undefined" && VIDEO_BASE_URL) ? VIDEO_BASE_URL : "";
        return base ? base.replace(/\/+$/, "") + "/" + path : path;
    }

    function loadVideo(questionId) {
        const url = getVideoUrl(questionId);

        videoPlayer.style.display = "none";
        videoError.style.display = "none";
        videoLoading.style.display = "flex";

        if (!url) {
            videoLoading.style.display = "none";
            videoError.style.display = "block";
            return;
        }

        videoPlayer.src = url;

        videoPlayer.onloadeddata = function () {
            videoLoading.style.display = "none";
            videoPlayer.style.display = "block";
        };

        videoPlayer.onerror = function () {
            videoLoading.style.display = "none";
            videoError.style.display = "block";
        };

        videoPlayer.load();
    }

    // ============================================================
    // Question loading
    // ============================================================
    function loadQuestion(index) {
        const q = QUESTIONS[index];
        const qId = String(q.id);

        const displayName = TYPE_DISPLAY_NAMES[q.question_type] || q.question_type;
        categoryName.textContent = displayName;

        const typeQuestions = QUESTIONS.filter((qq) => qq.question_type === q.question_type);
        const typeAnswered = typeQuestions.filter(
            (qq) => answers[String(qq.id)] && answers[String(qq.id)].submitted
        ).length;
        const typeIndex = typeQuestions.indexOf(q) + 1;
        categoryProgress.textContent =
            `Question ${typeIndex} of ${typeQuestions.length} in category (${typeAnswered}/${typeQuestions.length} answered)`;

        questionNumber.textContent = `Question ${index + 1} of ${QUESTIONS.length}`;
        questionText.textContent = q.question;

        loadVideo(q.id);

        const existingAnswer = answers[qId];

        // Reset textarea state
        if (existingAnswer && existingAnswer.submitted) {
            answerInput.value = existingAnswer.answer || "";
            answerInput.disabled = true;
            typedAnswer = existingAnswer.answer || "";
        } else {
            answerInput.value = "";
            answerInput.disabled = false;
            typedAnswer = "";
        }

        // Confidence buttons
        const confBtns = document.querySelectorAll(".confidence-btn");
        if (existingAnswer && existingAnswer.submitted) {
            confBtns.forEach((btn) => {
                btn.classList.remove("active");
                btn.classList.add("disabled");
                if (btn.dataset.confidence === existingAnswer.confidence) {
                    btn.classList.add("active");
                }
            });
        } else {
            selectedConfidence = null;
            confBtns.forEach((btn) => {
                btn.classList.remove("active", "disabled");
            });
        }

        if (existingAnswer && existingAnswer.submitted) {
            submitBtn.style.display = "none";
            showNavigationButtons(index);
        } else {
            submitBtn.style.display = "inline-block";
            submitBtn.disabled = true;
            submitBtn.textContent = "Submit Answer";
            nextBtn.style.display = "none";
            finishBtn.style.display = "none";
        }

        prevBtn.disabled = index === 0;
    }

    function updateSubmitState() {
        submitBtn.disabled = !(typedAnswer.trim().length > 0 && selectedConfidence);
    }

    // ============================================================
    // Submit
    // ============================================================
    function handleSubmit() {
        if (!typedAnswer.trim() || !selectedConfidence) return;

        const q = QUESTIONS[currentIndex];
        const qId = String(q.id);

        answers[qId] = {
            answer: typedAnswer.trim(),
            confidence: selectedConfidence,
            submitted: true,
            questionType: q.question_type,
            timestamp: new Date().toISOString(),
        };
        saveAnswers();
        updateProgress();

        // Auto-advance
        if (currentIndex < QUESTIONS.length - 1) {
            currentIndex++;
            loadQuestion(currentIndex);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            submitBtn.style.display = "none";
            answerInput.disabled = true;
            document.querySelectorAll(".confidence-btn").forEach((b) => b.classList.add("disabled"));
            showNavigationButtons(currentIndex);
        }
    }

    // ============================================================
    // Navigation
    // ============================================================
    function showNavigationButtons(index) {
        const isLast = index === QUESTIONS.length - 1;
        const allAnswered =
            Object.keys(answers).filter((k) => answers[k].submitted).length === QUESTIONS.length;

        if (isLast || allAnswered) {
            nextBtn.style.display = isLast ? "none" : "inline-block";
            finishBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            finishBtn.style.display = "none";
        }
    }

    function navigate(direction) {
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < QUESTIONS.length) {
            currentIndex = newIndex;
            loadQuestion(currentIndex);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    function updateProgress() {
        const answeredCount = Object.keys(answers).filter((k) => answers[k].submitted).length;
        const total = QUESTIONS.length;
        const pct = total > 0 ? (answeredCount / total) * 100 : 0;
        progressText.textContent = `${answeredCount} / ${total}`;
        progressBar.style.width = pct + "%";
    }

    // ============================================================
    // Finish & submit
    // ============================================================
    async function handleFinish() {
        const answeredCount = Object.keys(answers).filter((k) => answers[k].submitted).length;

        document.getElementById("finalAnswered").textContent = answeredCount;
        document.getElementById("completionModal").style.display = "flex";
        document.getElementById("submitStatus").style.display = "block";
        document.getElementById("submitSuccess").style.display = "none";
        document.getElementById("submitError").style.display = "none";

        const payload = {
            user_id: session.userId,
            email: session.userEmail || "",
            sport: sport,
            expertise_years: session.expertiseYears || "",
            expertise_rating: session.expertiseRating || "",
            session_id: session.sessionId,
            started_at: session.startedAt,
            completed_at: new Date().toISOString(),
            total_questions: QUESTIONS.length,
            answered: answeredCount,
            answers: JSON.stringify(answers),
        };

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                document.getElementById("submitStatus").style.display = "none";
                document.getElementById("submitSuccess").style.display = "block";
                localStorage.removeItem(STORAGE_ANSWERS_KEY);
                localStorage.removeItem(STORAGE_SESSION_KEY);
            } else {
                throw new Error("FormSpree returned " + response.status);
            }
        } catch (err) {
            console.error("Submission error:", err);
            document.getElementById("submitStatus").style.display = "none";
            document.getElementById("submitError").style.display = "block";
            document.getElementById("downloadBtn").onclick = function () {
                downloadResults(payload);
            };
        }
    }

    function downloadResults(payload) {
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bqa_t4_results_${session.userId}_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    init();
})();
