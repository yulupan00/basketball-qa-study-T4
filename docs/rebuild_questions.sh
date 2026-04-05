#!/bin/bash
# Regenerate questions.js files from the JSON source files.
# Run this after editing any *_questions_5.json file.

cd "$(dirname "$0")"

python3 << 'PYEOF'
import json, os

configs = [
    ("data/basketball_questions_3.json", "data/questions.js"),
]

for src, dst in configs:
    if not os.path.exists(src):
        continue
    with open(src) as f:
        data = json.load(f)

    questions = []
    for q in data:
        questions.append({
            "id": q["id"],
            "question_type": q["question_type"],
            "question": q["question"],
            "options": q["options"],
            "correct_answer": q["correct_answer"],
        })

    with open(dst, "w") as f:
        f.write("const QUESTIONS = ")
        json.dump(questions, f, indent=2)
        f.write(";\n")

    types = set(q["question_type"] for q in data)
    print(f"{dst}: {len(questions)} questions, {len(types)} types")

print("Done!")
PYEOF
