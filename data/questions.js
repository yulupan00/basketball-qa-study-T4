const QUESTIONS = [
  {
    "id": 268683252,
    "question_type": "Q1_atomic_action_recognition",
    "question": "What atomic action is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Assisting"
      },
      {
        "letter": "B",
        "text": "Free Throw Made"
      },
      {
        "letter": "C",
        "text": "Foul"
      },
      {
        "letter": "D",
        "text": "3 PT Made"
      },
      {
        "letter": "E",
        "text": "2 PT Missed"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 156957175,
    "question_type": "Q1_atomic_action_recognition",
    "question": "What atomic action is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Turnover"
      },
      {
        "letter": "B",
        "text": "Free Throw Made"
      },
      {
        "letter": "C",
        "text": "3 PT Made"
      },
      {
        "letter": "D",
        "text": "Pick'n'Roll"
      },
      {
        "letter": "E",
        "text": "Free Throw Missed"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 243070298,
    "question_type": "Q1_atomic_action_recognition",
    "question": "What atomic action is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Rebound"
      },
      {
        "letter": "B",
        "text": "2 PT Missed"
      },
      {
        "letter": "C",
        "text": "2 PT Made"
      },
      {
        "letter": "D",
        "text": "3 PT Made"
      },
      {
        "letter": "E",
        "text": "3 PT Missed"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 155159304,
    "question_type": "Q2_action_sequence",
    "question": "What is the correct sequence of actions shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "3 Pt Missed, Rebound, Steal"
      },
      {
        "letter": "B",
        "text": "Pick'n'Roll, 3 Pt Made, Assisting"
      },
      {
        "letter": "C",
        "text": "Pick'n'Roll, Assisting, 2 Pt Made"
      },
      {
        "letter": "D",
        "text": "Post, Assisting, 2 Pt Made"
      },
      {
        "letter": "E",
        "text": "2 Pt Missed, Rebound, 2 Pt Made"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 166013966,
    "question_type": "Q2_action_sequence",
    "question": "What is the correct sequence of actions shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "3 Pt Missed, Rebound, 2 Pt Made"
      },
      {
        "letter": "B",
        "text": "2+1, Assisting, Foul"
      },
      {
        "letter": "C",
        "text": "3 Pt Missed, Rebound, 2 Pt Missed"
      },
      {
        "letter": "D",
        "text": "Pick'n'Roll, 3 Pt Made, Assisting"
      },
      {
        "letter": "E",
        "text": "Screen, 3 Pt Missed, Rebound"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 134524803,
    "question_type": "Q2_action_sequence",
    "question": "What is the correct sequence of actions shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "2 Pt Missed, Rebound, Turnover"
      },
      {
        "letter": "B",
        "text": "Pick'n'Roll, 3 Pt Missed, Rebound"
      },
      {
        "letter": "C",
        "text": "Pick'n'Roll, 2 Pt Missed, Rebound"
      },
      {
        "letter": "D",
        "text": "2 Pt Missed, Rebound, 2 Pt Missed"
      },
      {
        "letter": "E",
        "text": "3 Pt Missed, 2 Pt Made, Assisting"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 224923420,
    "question_type": "Q3_contested_shot",
    "question": "Was the shot in the video contested or uncontested?",
    "options": [
      {
        "letter": "A",
        "text": "Contested"
      },
      {
        "letter": "B",
        "text": "Uncontested"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 268774187,
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
    "id": 177510865,
    "question_type": "Q3_dribble_move",
    "question": "What dribble move is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Step back"
      },
      {
        "letter": "B",
        "text": "Jab step"
      },
      {
        "letter": "C",
        "text": "Spin move"
      },
      {
        "letter": "D",
        "text": "Changing speed"
      },
      {
        "letter": "E",
        "text": "Quick first step"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 252825046,
    "question_type": "Q3_dribble_move",
    "question": "What dribble move is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Changing speed"
      },
      {
        "letter": "B",
        "text": "Quick first step"
      },
      {
        "letter": "C",
        "text": "Fadeaway"
      },
      {
        "letter": "D",
        "text": "Step back"
      },
      {
        "letter": "E",
        "text": "Spin move"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 184362145,
    "question_type": "Q3_dribble_move",
    "question": "What dribble move is shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Changing direction"
      },
      {
        "letter": "B",
        "text": "Fadeaway"
      },
      {
        "letter": "C",
        "text": "Changing speed"
      },
      {
        "letter": "D",
        "text": "Step back"
      },
      {
        "letter": "E",
        "text": "Quick first step"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 254158258,
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
    "id": 151737746,
    "question_type": "Q3_drive_direction",
    "question": "What is the direction of the drive in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Drives Right"
      },
      {
        "letter": "B",
        "text": "Drives Left"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 121153793,
    "question_type": "Q3_drive_direction",
    "question": "What is the direction of the drive in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Drives Right"
      },
      {
        "letter": "B",
        "text": "Drives Left"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 249567931,
    "question_type": "Q3_play_type",
    "question": "What is the play type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Cut"
      },
      {
        "letter": "B",
        "text": "Isolation"
      },
      {
        "letter": "C",
        "text": "Post"
      },
      {
        "letter": "D",
        "text": "Pick'n'Roll"
      },
      {
        "letter": "E",
        "text": "Pick-n-roll without a ball"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 251742806,
    "question_type": "Q3_play_type",
    "question": "What is the play type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Transition"
      },
      {
        "letter": "B",
        "text": "Cut"
      },
      {
        "letter": "C",
        "text": "Isolation"
      },
      {
        "letter": "D",
        "text": "Screen off"
      },
      {
        "letter": "E",
        "text": "Hand offs"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 134070434,
    "question_type": "Q3_shooting_hand",
    "question": "What is the shooting hand of the player in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Right"
      },
      {
        "letter": "B",
        "text": "Left"
      },
      {
        "letter": "C",
        "text": "Both"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 223083214,
    "question_type": "Q3_shooting_hand",
    "question": "What is the shooting hand of the player in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Right"
      },
      {
        "letter": "B",
        "text": "Left"
      },
      {
        "letter": "C",
        "text": "Both"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 263903552,
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
    "correct_answer": "A"
  },
  {
    "id": 267729301,
    "question_type": "Q3_shot_type",
    "question": "What is the shot type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Dunk"
      },
      {
        "letter": "B",
        "text": "Reverse"
      },
      {
        "letter": "C",
        "text": "Alley oop"
      },
      {
        "letter": "D",
        "text": "Lay up"
      },
      {
        "letter": "E",
        "text": "Jumper"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 266581026,
    "question_type": "Q3_shot_type",
    "question": "What is the shot type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Hook"
      },
      {
        "letter": "B",
        "text": "Dunk"
      },
      {
        "letter": "C",
        "text": "Reverse"
      },
      {
        "letter": "D",
        "text": "Lay up"
      },
      {
        "letter": "E",
        "text": "Jumper"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 140566184,
    "question_type": "Q3_shot_type",
    "question": "What is the shot type shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Reverse"
      },
      {
        "letter": "B",
        "text": "Jumper"
      },
      {
        "letter": "C",
        "text": "Alley oop"
      },
      {
        "letter": "D",
        "text": "Hook"
      },
      {
        "letter": "E",
        "text": "Dunk"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 267424100,
    "question_type": "Q4_spatial_position_non_descriptive",
    "question": "Based on the Shot Missed displayed in the video clip, select the correct option describing the area on the court where the shot occurred and provide only the corresponding letter as the answer:",
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
        "text": "Top"
      },
      {
        "letter": "D",
        "text": "Corner"
      },
      {
        "letter": "E",
        "text": "Restricted Area"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 125598837,
    "question_type": "Q4_spatial_position_non_descriptive",
    "question": "Watch the Shot Made in the video clip and determine the correct court area where the shot happened. Select the right option and respond with just the corresponding letter.",
    "options": [
      {
        "letter": "A",
        "text": "Short Corner"
      },
      {
        "letter": "B",
        "text": "Wing"
      },
      {
        "letter": "C",
        "text": "Restricted Area"
      },
      {
        "letter": "D",
        "text": "Low Post"
      },
      {
        "letter": "E",
        "text": "Corner"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 245941070,
    "question_type": "Q5_player_name_same_team_update",
    "question": "Watch the Free Throw Made in the clip and determine the player's name. Select the right option and respond with just the corresponding letter.",
    "options": [
      {
        "letter": "A",
        "text": "Demir Dogan"
      },
      {
        "letter": "B",
        "text": "Zoran Vuceljic"
      },
      {
        "letter": "C",
        "text": "Tomislav Ivisic"
      },
      {
        "letter": "D",
        "text": "Vasilije Bacovic"
      },
      {
        "letter": "E",
        "text": "Zvonimir Ivisic"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 140017079,
    "question_type": "Q5_player_name_same_team_update",
    "question": "Observe the Foul in the clip and identify the player's name. Choose the correct option and respond with the corresponding letter only.",
    "options": [
      {
        "letter": "A",
        "text": "Sasha Mattias Grant"
      },
      {
        "letter": "B",
        "text": "T.J. Bray"
      },
      {
        "letter": "C",
        "text": "Vladimir Lucic"
      },
      {
        "letter": "D",
        "text": "Greg Monroe"
      },
      {
        "letter": "E",
        "text": "DeMarcus Nelson"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 161386374,
    "question_type": "Q5_player_name_same_team_update",
    "question": "Analyze the 2 Pt Missed shown in the clip and select the correct player's name. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "Kris Bankston"
      },
      {
        "letter": "B",
        "text": "Jovan Stulic"
      },
      {
        "letter": "C",
        "text": "Marko Andric"
      },
      {
        "letter": "D",
        "text": "Yacine Toumi"
      },
      {
        "letter": "E",
        "text": "Nikola Maric"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 266775945,
    "question_type": "Q5_player_number_two_team_similar_update",
    "question": "Observe the 2 Pt Made in the video and determine the player's jersey number and team name. Choose the correct option and respond with the corresponding letter only.",
    "options": [
      {
        "letter": "A",
        "text": "13, Oral Roberts"
      },
      {
        "letter": "B",
        "text": "2, Western Illinois"
      },
      {
        "letter": "C",
        "text": "23, Western Illinois"
      },
      {
        "letter": "D",
        "text": "3, Oral Roberts"
      },
      {
        "letter": "E",
        "text": "32, Western Illinois"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 249751729,
    "question_type": "Q5_player_number_two_team_similar_update",
    "question": "Review the 2 Pt Made displayed in the clip and pick the correct option identifying the player's jersey number and team name. Reply using only the corresponding letter.",
    "options": [
      {
        "letter": "A",
        "text": "13, Air Force"
      },
      {
        "letter": "B",
        "text": "10, Air Force"
      },
      {
        "letter": "C",
        "text": "11, Air Force"
      },
      {
        "letter": "D",
        "text": "33, Air Force"
      },
      {
        "letter": "E",
        "text": "40, Air Force"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 217697817,
    "question_type": "Q5_player_number_two_team_similar_update",
    "question": "Analyze the 2 Pt Missed shown in the clip and select the correct jersey number and team name. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "13, S.L. Benfica"
      },
      {
        "letter": "B",
        "text": "1, S.L. Benfica"
      },
      {
        "letter": "C",
        "text": "9, S.L. Benfica"
      },
      {
        "letter": "D",
        "text": "11, Sporting CP"
      },
      {
        "letter": "E",
        "text": "20, Sporting CP"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 169964408,
    "question_type": "Q5_player_position",
    "question": "Analyze the Post displayed in the clip and select the correct option indicating the player's position. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "Center"
      },
      {
        "letter": "B",
        "text": "Forward"
      },
      {
        "letter": "C",
        "text": "Guard"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 161562533,
    "question_type": "Q5_player_position",
    "question": "Analyze the Free Throw Made displayed in the clip and select the correct option indicating the player's position. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "Center"
      },
      {
        "letter": "B",
        "text": "Guard"
      },
      {
        "letter": "C",
        "text": "Forward"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 141983484,
    "question_type": "Q5_player_position",
    "question": "Watch the Assisting in the clip and identify the player's position. Select the right option and respond with just the corresponding letter.",
    "options": [
      {
        "letter": "A",
        "text": "Center"
      },
      {
        "letter": "B",
        "text": "Forward"
      },
      {
        "letter": "C",
        "text": "Guard"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 133995834,
    "question_type": "Q5_player_skill_level",
    "question": "Analyze the 2 Pt Shot displayed in the clip and determine the player's 2 Pt Shooting skill level. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "Excellent"
      },
      {
        "letter": "B",
        "text": "Average"
      },
      {
        "letter": "C",
        "text": "Poor"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 251953754,
    "question_type": "Q5_player_skill_level",
    "question": "Analyze the 3 Pt Shot displayed in the clip and determine the player's 3 Pt Shooting skill level. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "Poor"
      },
      {
        "letter": "B",
        "text": "Excellent"
      },
      {
        "letter": "C",
        "text": "Average"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 161781697,
    "question_type": "Q5_player_skill_level",
    "question": "Observe the 3 Pt Shot in the clip and assess the player's 3 Pt Shooting skill level. Choose the correct option and respond with the corresponding letter only.",
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
    "correct_answer": "B"
  },
  {
    "id": 163397745,
    "question_type": "Q6_current_score_similar",
    "question": "What is the current score shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "46 - 40"
      },
      {
        "letter": "B",
        "text": "55 - 46"
      },
      {
        "letter": "C",
        "text": "50 - 43"
      },
      {
        "letter": "D",
        "text": "42 - 35"
      },
      {
        "letter": "E",
        "text": "43 - 39"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 124911734,
    "question_type": "Q6_current_score_similar",
    "question": "What is the current score shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "56 - 27"
      },
      {
        "letter": "B",
        "text": "47 - 26"
      },
      {
        "letter": "C",
        "text": "50 - 27"
      },
      {
        "letter": "D",
        "text": "52 - 31"
      },
      {
        "letter": "E",
        "text": "56 - 33"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 275238212,
    "question_type": "Q6_current_score_similar",
    "question": "What is the current score shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "58 - 73"
      },
      {
        "letter": "B",
        "text": "69 - 75"
      },
      {
        "letter": "C",
        "text": "59 - 73"
      },
      {
        "letter": "D",
        "text": "68 - 83"
      },
      {
        "letter": "E",
        "text": "61 - 77"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 155031921,
    "question_type": "Q6_remaining_time",
    "question": "When 2 Pt Made occurred in the clip, select the correct option that describes closest to the remaining quarter time. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "3:47"
      },
      {
        "letter": "B",
        "text": "7:14"
      },
      {
        "letter": "C",
        "text": "5:33"
      },
      {
        "letter": "D",
        "text": "2:34"
      },
      {
        "letter": "E",
        "text": "1:31"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 267424101,
    "question_type": "Q6_remaining_time",
    "question": "When 3 Pt Missed occurred in the clip, choose the correct option that best estimates the remaining quarter time. Respond with the corresponding letter only.",
    "options": [
      {
        "letter": "A",
        "text": "9:27"
      },
      {
        "letter": "B",
        "text": "6:05"
      },
      {
        "letter": "C",
        "text": "2:15"
      },
      {
        "letter": "D",
        "text": "3:51"
      },
      {
        "letter": "E",
        "text": "8:29"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 154381146,
    "question_type": "Q6_remaining_time",
    "question": "Analyze the moment when 2 Pt Made happened in the clip and select the option that most accurately describes the remaining quarter time. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "0:15"
      },
      {
        "letter": "B",
        "text": "1:28"
      },
      {
        "letter": "C",
        "text": "9:16"
      },
      {
        "letter": "D",
        "text": "5:27"
      },
      {
        "letter": "E",
        "text": "2:51"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 191657286,
    "question_type": "Q6_shot_clock",
    "question": "When 2 Pt Missed occurred in the clip, select the correct option that describes closest to the remaining shot clock. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "12"
      },
      {
        "letter": "B",
        "text": "24"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "18"
      },
      {
        "letter": "E",
        "text": "6"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 183494408,
    "question_type": "Q6_shot_clock",
    "question": "When 2 Pt Made occurred in the clip, select the correct option that describes closest to the remaining shot clock. Provide only the corresponding letter as your answer.",
    "options": [
      {
        "letter": "A",
        "text": "0"
      },
      {
        "letter": "B",
        "text": "6"
      },
      {
        "letter": "C",
        "text": "18"
      },
      {
        "letter": "D",
        "text": "24"
      },
      {
        "letter": "E",
        "text": "12"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 152881452,
    "question_type": "Q6_shot_clock",
    "question": "Review the clip and determine the closest estimate of the remaining shot clock when 3 Pt Made took place. Reply using only the corresponding letter.",
    "options": [
      {
        "letter": "A",
        "text": "24"
      },
      {
        "letter": "B",
        "text": "12"
      },
      {
        "letter": "C",
        "text": "0"
      },
      {
        "letter": "D",
        "text": "6"
      },
      {
        "letter": "E",
        "text": "18"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 206301050,
    "question_type": "Q6_which_quarter",
    "question": "What is the current quarter shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "2"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 184636122,
    "question_type": "Q6_which_quarter",
    "question": "What is the current quarter shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 264370616,
    "question_type": "Q6_which_quarter",
    "question": "What is the current quarter shown in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 142337031,
    "question_type": "Q6_which_teams",
    "question": "What are the two teams playing in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Los Angeles Lakers and Brooklyn Nets"
      },
      {
        "letter": "B",
        "text": "Chicago Bulls and Washington Wizards"
      },
      {
        "letter": "C",
        "text": "Denver Nuggets and Boston Celtics"
      },
      {
        "letter": "D",
        "text": "Washington Wizards and Minnesota Timberwolves"
      },
      {
        "letter": "E",
        "text": "New York Knicks and Los Angeles Lakers"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 142548571,
    "question_type": "Q6_which_teams",
    "question": "What are the two teams playing in the video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Oklahoma State and Yale"
      },
      {
        "letter": "B",
        "text": "Sonoma State and Morehead State"
      },
      {
        "letter": "C",
        "text": "Thomas (GA) and LeTourneau"
      },
      {
        "letter": "D",
        "text": "Milligan and Carson-Newman"
      },
      {
        "letter": "E",
        "text": "Truman State and Christian Brothers"
      }
    ],
    "correct_answer": "A"
  }
];
