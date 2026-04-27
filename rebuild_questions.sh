#!/bin/bash
# Regenerate questions.js from the JSON source file.
# T4 uses free-text answers (no options/correct_answer).
# Reference answers are kept server-side, NOT shipped to the browser.

cd "$(dirname "$0")"

python3 << 'PYEOF'
import json, os

configs = [
    ("data/basketball_questions.json", "data/questions.js"),
]

for src, dst in configs:
    if not os.path.exists(src):
        continue
    with open(src) as f:
        data = json.load(f)

    # Strip reference_answer / video / game_id / league before shipping to browser
    questions = []
    for q in data:
        questions.append({
            "id": q["id"],
            "question_type": q["question_type"],
            "question": q["question"],
        })

    with open(dst, "w") as f:
        f.write("const QUESTIONS = ")
        json.dump(questions, f, indent=2)
        f.write(";\n")

    print(f"{dst}: {len(questions)} questions")

print("Done!")
PYEOF
