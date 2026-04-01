const QUESTIONS = [
  {
    "id": 141736085,
    "question_type": "Q1_atomic_action_recognition",
    "question": "What atomic action is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Turnover"
      },
      {
        "letter": "B",
        "text": "3 PT Made"
      },
      {
        "letter": "C",
        "text": "Assisting"
      },
      {
        "letter": "D",
        "text": "2 PT Missed"
      },
      {
        "letter": "E",
        "text": "Foul"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 154647320,
    "question_type": "Q2_action_sequence",
    "question": "What is the correct sequence of actions shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Pick'n'Roll, Rebound, 2 Pt Made"
      },
      {
        "letter": "B",
        "text": "2 Pt Missed, Rebound, 2 Pt Missed"
      },
      {
        "letter": "C",
        "text": "2 Pt Missed, Rebound, 2 Pt Made"
      },
      {
        "letter": "D",
        "text": "Rebound, Rebound, Assisting"
      },
      {
        "letter": "E",
        "text": "3 Pt Missed, Rebound, 2 Pt Made"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 271850163,
    "question_type": "Q3_contested_shot",
    "question": "Was the shot in the video contested or uncontested?",
    "options": [
      {
        "letter": "A",
        "text": "Uncontested"
      },
      {
        "letter": "B",
        "text": "Contested"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 216252378,
    "question_type": "Q3_dribble_move",
    "question": "What dribble move is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Changing speed"
      },
      {
        "letter": "B",
        "text": "Step back"
      },
      {
        "letter": "C",
        "text": "Quick first step"
      },
      {
        "letter": "D",
        "text": "In & out"
      },
      {
        "letter": "E",
        "text": "Fadeaway"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 150919887,
    "question_type": "Q3_drive_direction",
    "question": "What is the direction of the drive in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Drives Left"
      },
      {
        "letter": "B",
        "text": "Drives Right"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 255644145,
    "question_type": "Q3_play_type",
    "question": "What is the play type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Pick-n-roll without a ball"
      },
      {
        "letter": "B",
        "text": "Transition"
      },
      {
        "letter": "C",
        "text": "Cut"
      },
      {
        "letter": "D",
        "text": "Isolation"
      },
      {
        "letter": "E",
        "text": "Screen off"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 268495570,
    "question_type": "Q3_shooting_hand",
    "question": "What is the shooting hand of the player in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Both"
      },
      {
        "letter": "B",
        "text": "Right"
      },
      {
        "letter": "C",
        "text": "Left"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 172820095,
    "question_type": "Q3_shot_type",
    "question": "What is the shot type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Hook"
      },
      {
        "letter": "B",
        "text": "Alley oop"
      },
      {
        "letter": "C",
        "text": "Dunk"
      },
      {
        "letter": "D",
        "text": "Lay up"
      },
      {
        "letter": "E",
        "text": "Floater"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 260607362,
    "question_type": "Q4_spatial_position_non_descriptive",
    "question": "What is the spatial position of the shot in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Point"
      },
      {
        "letter": "B",
        "text": "Short Corner"
      },
      {
        "letter": "C",
        "text": "Wing"
      },
      {
        "letter": "D",
        "text": "High Post"
      },
      {
        "letter": "E",
        "text": "Corner"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 143872727,
    "question_type": "Q5_player_name_same_team_update",
    "question": "What is the name of the player who made the shot in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Milan Williams"
      },
      {
        "letter": "B",
        "text": "Keegan Records"
      },
      {
        "letter": "C",
        "text": "Tucker Richardson"
      },
      {
        "letter": "D",
        "text": "David Maynard"
      },
      {
        "letter": "E",
        "text": "Ryan Moffatt"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 281018938,
    "question_type": "Q5_player_number_two_team_similar_update",
    "question": "What is the jersey number and team name of the player who missed the shot in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "11, BC KalevCramo"
      },
      {
        "letter": "B",
        "text": "21, BC KalevCramo"
      },
      {
        "letter": "C",
        "text": "43, BC KalevCramo"
      },
      {
        "letter": "D",
        "text": "31, BC KalevCramo"
      },
      {
        "letter": "E",
        "text": "22, Brose Bamberg"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 231381019,
    "question_type": "Q5_player_position",
    "question": "What is the position of the player who made the assist in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Guard"
      },
      {
        "letter": "B",
        "text": "Forward"
      },
      {
        "letter": "C",
        "text": "Center"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 148920682,
    "question_type": "Q5_player_skill_level",
    "question": "What is the 2 Pt Shooting skill level of the player in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Poor"
      },
      {
        "letter": "B",
        "text": "Average"
      },
      {
        "letter": "C",
        "text": "Excellent"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 125103240,
    "question_type": "Q6_current_score_similar",
    "question": "What is the current score shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "52 - 53"
      },
      {
        "letter": "B",
        "text": "44 - 46"
      },
      {
        "letter": "C",
        "text": "61 - 58"
      },
      {
        "letter": "D",
        "text": "49 - 48"
      },
      {
        "letter": "E",
        "text": "60 - 58"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 177381349,
    "question_type": "Q6_remaining_time",
    "question": "What is the remaining time in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "9:25"
      },
      {
        "letter": "B",
        "text": "5:55"
      },
      {
        "letter": "C",
        "text": "7:52"
      },
      {
        "letter": "D",
        "text": "2:41"
      },
      {
        "letter": "E",
        "text": "0:05"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 151469658,
    "question_type": "Q6_shot_clock",
    "question": "What is the remaining shot clock in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "18"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "6"
      },
      {
        "letter": "E",
        "text": "22"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 256972024,
    "question_type": "Q6_which_quarter",
    "question": "What is the current quarter shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "4"
      },
      {
        "letter": "C",
        "text": "1"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 163558801,
    "question_type": "Q6_which_teams",
    "question": "What are the two teams playing in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Rider and Cincinnati"
      },
      {
        "letter": "B",
        "text": "Belmont and Tennessee-Martin"
      },
      {
        "letter": "C",
        "text": "Hartford and Xavier (LA)"
      },
      {
        "letter": "D",
        "text": "California Baptist and Sacred Heart"
      },
      {
        "letter": "E",
        "text": "Elon and Saint Louis"
      }
    ],
    "correct_answer": "B"
  }
];