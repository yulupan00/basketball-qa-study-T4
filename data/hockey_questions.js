const QUESTIONS = [
  {
    "id": 552598660,
    "question_type": "Q1_hockey_atomic_action_recognition",
    "question": "Identify the atomic action displayed in this hockey clip.",
    "options": [
      {
        "letter": "A",
        "text": "Takeaway"
      },
      {
        "letter": "B",
        "text": "Second assist"
      },
      {
        "letter": "C",
        "text": "Pass inaccurate"
      },
      {
        "letter": "D",
        "text": "Successful dribbling"
      },
      {
        "letter": "E",
        "text": "Hit"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 370836343,
    "question_type": "Q1_hockey_atomic_action_recognition",
    "question": "Identify the atomic action displayed in this hockey clip.",
    "options": [
      {
        "letter": "A",
        "text": "Foul"
      },
      {
        "letter": "B",
        "text": "Pass inaccurate"
      },
      {
        "letter": "C",
        "text": "Controlled breakout"
      },
      {
        "letter": "D",
        "text": "Goal"
      },
      {
        "letter": "E",
        "text": "Wide shot"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 553958644,
    "question_type": "Q1_hockey_atomic_action_recognition",
    "question": "Which atomic action is being performed by the player in this hockey video?",
    "options": [
      {
        "letter": "A",
        "text": "Takeaway"
      },
      {
        "letter": "B",
        "text": "Goal"
      },
      {
        "letter": "C",
        "text": "Hit"
      },
      {
        "letter": "D",
        "text": "Zone entry successful"
      },
      {
        "letter": "E",
        "text": "Offside"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 432506223,
    "question_type": "Q1_hockey_atomic_action_recognition",
    "question": "What is the atomic action shown in this hockey video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Goal"
      },
      {
        "letter": "B",
        "text": "Pass inaccurate"
      },
      {
        "letter": "C",
        "text": "Dump in successful"
      },
      {
        "letter": "D",
        "text": "Dump out successful"
      },
      {
        "letter": "E",
        "text": "Puck battles"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 461643097,
    "question_type": "Q1_hockey_atomic_action_recognition",
    "question": "What atomic action occurs during this video clip?",
    "options": [
      {
        "letter": "A",
        "text": "Puck losses"
      },
      {
        "letter": "B",
        "text": "Dump out successful"
      },
      {
        "letter": "C",
        "text": "Unsuccessful dribbling"
      },
      {
        "letter": "D",
        "text": "Second assist"
      },
      {
        "letter": "E",
        "text": "Zone entry successful"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 133597235,
    "question_type": "Q2_hockey_action_sequence",
    "question": "Determine the sequence in which the plays occur in this video.",
    "options": [
      {
        "letter": "A",
        "text": "Second assist, Pass accurate, Dump in successful"
      },
      {
        "letter": "B",
        "text": "Puck battles, Dump in unsuccessful, Takeaway"
      },
      {
        "letter": "C",
        "text": "Icing, Pass accurate, Goal"
      },
      {
        "letter": "D",
        "text": "Icing, Blocked shot, First assist"
      },
      {
        "letter": "E",
        "text": "Puck battles, Pass accurate, Takeaway"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 316942229,
    "question_type": "Q2_hockey_action_sequence",
    "question": "Identify the chronological order of actions shown in this hockey footage.",
    "options": [
      {
        "letter": "A",
        "text": "First assist, Successful dribbling, Dump in unsuccessful"
      },
      {
        "letter": "B",
        "text": "Puck losses, Pass accurate, Offside"
      },
      {
        "letter": "C",
        "text": "Dump out unsuccessful, Goal, Breakout successful"
      },
      {
        "letter": "D",
        "text": "Faceoff, Dump out unsuccessful, Takeaway"
      },
      {
        "letter": "E",
        "text": "Puck battles, Wide shot, Controlled breakout"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 567582846,
    "question_type": "Q2_hockey_action_sequence",
    "question": "List the sequence of actions demonstrated in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Dump in successful, Takeaway, Zone entry successful"
      },
      {
        "letter": "B",
        "text": "Offside, Second assist, Controlled breakout"
      },
      {
        "letter": "C",
        "text": "Shot on goal, Second assist, Goal"
      },
      {
        "letter": "D",
        "text": "Icing, Dump out unsuccessful, Dump out successful"
      },
      {
        "letter": "E",
        "text": "Hit, Puck battles, Breakout successful"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 344912659,
    "question_type": "Q2_hockey_action_sequence",
    "question": "Describe the order of actions performed in this segment of the hockey game clip.",
    "options": [
      {
        "letter": "A",
        "text": "Zone entry successful, Unsuccessful dribbling, Puck losses"
      },
      {
        "letter": "B",
        "text": "Dump in unsuccessful, Puck losses, Dump in successful"
      },
      {
        "letter": "C",
        "text": "Second assist, Puck battles, Dump in successful"
      },
      {
        "letter": "D",
        "text": "Wide shot, Controlled breakout, Blocked shot"
      },
      {
        "letter": "E",
        "text": "Puck battles, Dump in unsuccessful, Pass inaccurate"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 412026429,
    "question_type": "Q2_hockey_action_sequence",
    "question": "Which actions take place, and in what order, during this clip?",
    "options": [
      {
        "letter": "A",
        "text": "Hit, Zone entry successful, Pass accurate"
      },
      {
        "letter": "B",
        "text": "Successful dribbling, Faceoff, Pass accurate"
      },
      {
        "letter": "C",
        "text": "Goal, Pass inaccurate, Zone entry successful"
      },
      {
        "letter": "D",
        "text": "Dump out successful, Dump in unsuccessful, Goal"
      },
      {
        "letter": "E",
        "text": "Blocked shot, First assist, Goal"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 346586280,
    "question_type": "Q3_hockey_goalie_stance",
    "question": "Identify the stance adopted by the goaltender at this point in the play.",
    "options": [
      {
        "letter": "A",
        "text": "Beaten"
      },
      {
        "letter": "B",
        "text": "In the butterfly position"
      },
      {
        "letter": "C",
        "text": "In motion"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 380808360,
    "question_type": "Q3_hockey_goalie_stance",
    "question": "What stance does the goalie use in this hockey video?",
    "options": [
      {
        "letter": "A",
        "text": "In motion"
      },
      {
        "letter": "B",
        "text": "Beaten"
      },
      {
        "letter": "C",
        "text": "In the butterfly position"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 82720466,
    "question_type": "Q3_hockey_goalie_stance",
    "question": "Identify the goalie's stance shown in this video.",
    "options": [
      {
        "letter": "A",
        "text": "Beaten"
      },
      {
        "letter": "B",
        "text": "In the butterfly position"
      },
      {
        "letter": "C",
        "text": "In motion"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 312690285,
    "question_type": "Q3_hockey_goalie_stance",
    "question": "Identify the stance adopted by the goaltender at this point in the play.",
    "options": [
      {
        "letter": "A",
        "text": "Beaten"
      },
      {
        "letter": "B",
        "text": "In the butterfly position"
      },
      {
        "letter": "C",
        "text": "In motion"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 233119896,
    "question_type": "Q3_hockey_goalie_stance",
    "question": "What stance does the goalie use in this hockey video?",
    "options": [
      {
        "letter": "A",
        "text": "In the butterfly position"
      },
      {
        "letter": "B",
        "text": "Beaten"
      },
      {
        "letter": "C",
        "text": "In motion"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 218213795,
    "question_type": "Q3_hockey_penalty_violation",
    "question": "Which penalty or violation takes place in this video segment?",
    "options": [
      {
        "letter": "A",
        "text": "Game delay"
      },
      {
        "letter": "B",
        "text": "Fighting"
      },
      {
        "letter": "C",
        "text": "Boarding"
      },
      {
        "letter": "D",
        "text": "High-sticking"
      },
      {
        "letter": "E",
        "text": "Holding/ hooking"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 560037793,
    "question_type": "Q3_hockey_penalty_violation",
    "question": "What kind of violation is shown in the hockey clip?",
    "options": [
      {
        "letter": "A",
        "text": "Roughing"
      },
      {
        "letter": "B",
        "text": "Fighting"
      },
      {
        "letter": "C",
        "text": "Boarding"
      },
      {
        "letter": "D",
        "text": "High-sticking"
      },
      {
        "letter": "E",
        "text": "Hit"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 228186723,
    "question_type": "Q3_hockey_penalty_violation",
    "question": "What violation is committed in this video?",
    "options": [
      {
        "letter": "A",
        "text": "Other"
      },
      {
        "letter": "B",
        "text": "Hit"
      },
      {
        "letter": "C",
        "text": "Game delay"
      },
      {
        "letter": "D",
        "text": "Too many men"
      },
      {
        "letter": "E",
        "text": "Moving the goal"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 351406133,
    "question_type": "Q3_hockey_penalty_violation",
    "question": "Determine the type of violation that occurs in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Hit"
      },
      {
        "letter": "B",
        "text": "Charging"
      },
      {
        "letter": "C",
        "text": "Interference"
      },
      {
        "letter": "D",
        "text": "Roughing"
      },
      {
        "letter": "E",
        "text": "High-sticking"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 280880830,
    "question_type": "Q3_hockey_penalty_violation",
    "question": "Determine the type of violation that occurs in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Moving the goal"
      },
      {
        "letter": "B",
        "text": "Tripping"
      },
      {
        "letter": "C",
        "text": "Fighting"
      },
      {
        "letter": "D",
        "text": "Game delay"
      },
      {
        "letter": "E",
        "text": "Holding/ hooking"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 417544658,
    "question_type": "Q3_hockey_shot_type",
    "question": "Which kind of hockey shot is executed in this video?",
    "options": [
      {
        "letter": "A",
        "text": "Slapshot"
      },
      {
        "letter": "B",
        "text": "Deflection shot"
      },
      {
        "letter": "C",
        "text": "From behind the goal"
      },
      {
        "letter": "D",
        "text": "Backhand shot"
      },
      {
        "letter": "E",
        "text": "Rebound shot"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 125254171,
    "question_type": "Q3_hockey_shot_type",
    "question": "Based on the video, what shot is the player attempting on goal?",
    "options": [
      {
        "letter": "A",
        "text": "Deflection shot"
      },
      {
        "letter": "B",
        "text": "Hard slapshot"
      },
      {
        "letter": "C",
        "text": "Deflection"
      },
      {
        "letter": "D",
        "text": "Slapshot"
      },
      {
        "letter": "E",
        "text": "Wrist shot"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 294107587,
    "question_type": "Q3_hockey_shot_type",
    "question": "Determine the type of shot shown in this hockey clip.",
    "options": [
      {
        "letter": "A",
        "text": "Backhand shot"
      },
      {
        "letter": "B",
        "text": "Deflection shot"
      },
      {
        "letter": "C",
        "text": "Slapshot"
      },
      {
        "letter": "D",
        "text": "Wrist shot"
      },
      {
        "letter": "E",
        "text": "Rebound shot"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 110022878,
    "question_type": "Q3_hockey_shot_type",
    "question": "What shot type is displayed in this hockey footage?",
    "options": [
      {
        "letter": "A",
        "text": "From behind the goal"
      },
      {
        "letter": "B",
        "text": "Hard slapshot"
      },
      {
        "letter": "C",
        "text": "Slapshot"
      },
      {
        "letter": "D",
        "text": "Deflection"
      },
      {
        "letter": "E",
        "text": "Wrist shot"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 342018076,
    "question_type": "Q3_hockey_shot_type",
    "question": "Determine the type of shot shown in this hockey clip.",
    "options": [
      {
        "letter": "A",
        "text": "Backhand shot"
      },
      {
        "letter": "B",
        "text": "Wrist shot"
      },
      {
        "letter": "C",
        "text": "Deflection shot"
      },
      {
        "letter": "D",
        "text": "Deflection"
      },
      {
        "letter": "E",
        "text": "Slapshot"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 549123916,
    "question_type": "Q4_hockey_zone_understanding",
    "question": "From which zone of the rink does the Takeaway happen in this video?",
    "options": [
      {
        "letter": "A",
        "text": "Offensive Zone"
      },
      {
        "letter": "B",
        "text": "Defensive Zone"
      },
      {
        "letter": "C",
        "text": "Neutral Zone"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 466755713,
    "question_type": "Q4_hockey_zone_understanding",
    "question": "From which zone on the ice does the Pass accurate take place?",
    "options": [
      {
        "letter": "A",
        "text": "Defensive Zone"
      },
      {
        "letter": "B",
        "text": "Neutral Zone"
      },
      {
        "letter": "C",
        "text": "Offensive Zone"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 828177071,
    "question_type": "Q4_hockey_zone_understanding",
    "question": "Indicate the zone of play where the Puck losses occurs in this hockey video.",
    "options": [
      {
        "letter": "A",
        "text": "Defensive Zone"
      },
      {
        "letter": "B",
        "text": "Offensive Zone"
      },
      {
        "letter": "C",
        "text": "Neutral Zone"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 101144028,
    "question_type": "Q4_hockey_zone_understanding",
    "question": "From which zone on the ice does the Hit take place?",
    "options": [
      {
        "letter": "A",
        "text": "Defensive Zone"
      },
      {
        "letter": "B",
        "text": "Offensive Zone"
      },
      {
        "letter": "C",
        "text": "Neutral Zone"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 84707577,
    "question_type": "Q4_hockey_zone_understanding",
    "question": "Identify which zone of the hockey rink the Puck losses occurs in.",
    "options": [
      {
        "letter": "A",
        "text": "Defensive Zone"
      },
      {
        "letter": "B",
        "text": "Neutral Zone"
      },
      {
        "letter": "C",
        "text": "Offensive Zone"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 93637605,
    "question_type": "Q5_hockey_player_jersey_number",
    "question": "From the clip, identify the player's jersey number during Breakout successful.",
    "options": [
      {
        "letter": "A",
        "text": "99"
      },
      {
        "letter": "B",
        "text": "35"
      },
      {
        "letter": "C",
        "text": "16"
      },
      {
        "letter": "D",
        "text": "25"
      },
      {
        "letter": "E",
        "text": "31"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 112029900,
    "question_type": "Q5_hockey_player_jersey_number",
    "question": "From the clip, identify the player's jersey number during Takeaway.",
    "options": [
      {
        "letter": "A",
        "text": "17"
      },
      {
        "letter": "B",
        "text": "27"
      },
      {
        "letter": "C",
        "text": "35"
      },
      {
        "letter": "D",
        "text": "22"
      },
      {
        "letter": "E",
        "text": "14"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 130865882,
    "question_type": "Q5_hockey_player_jersey_number",
    "question": "Identify the number on the player's uniform as they execute Puck battles in the video.",
    "options": [
      {
        "letter": "A",
        "text": "32"
      },
      {
        "letter": "B",
        "text": "75"
      },
      {
        "letter": "C",
        "text": "24"
      },
      {
        "letter": "D",
        "text": "18"
      },
      {
        "letter": "E",
        "text": "23"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 218198099,
    "question_type": "Q5_hockey_player_jersey_number",
    "question": "From the clip, identify the player's jersey number during Faceoff.",
    "options": [
      {
        "letter": "A",
        "text": "19"
      },
      {
        "letter": "B",
        "text": "14"
      },
      {
        "letter": "C",
        "text": "10"
      },
      {
        "letter": "D",
        "text": "11"
      },
      {
        "letter": "E",
        "text": "98"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 271669705,
    "question_type": "Q5_hockey_player_jersey_number",
    "question": "What number does the skater wear while executing Takeaway in the clip?",
    "options": [
      {
        "letter": "A",
        "text": "9"
      },
      {
        "letter": "B",
        "text": "53"
      },
      {
        "letter": "C",
        "text": "77"
      },
      {
        "letter": "D",
        "text": "22"
      },
      {
        "letter": "E",
        "text": "5"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 644125476,
    "question_type": "Q5_hockey_player_name_10000x40",
    "question": "From the footage, name the player executing Touch on the ice.",
    "options": [
      {
        "letter": "A",
        "text": "Artemi Nizameyev"
      },
      {
        "letter": "B",
        "text": "Blake Steenerson"
      },
      {
        "letter": "C",
        "text": "Cameron Korpi"
      },
      {
        "letter": "D",
        "text": "Dallas Vieau"
      },
      {
        "letter": "E",
        "text": "Trevor Connelly"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 563708448,
    "question_type": "Q5_hockey_player_name_10000x40",
    "question": "Who is the player carrying out Touch in the hockey footage?",
    "options": [
      {
        "letter": "A",
        "text": "Adam Hlinsky"
      },
      {
        "letter": "B",
        "text": "Vaclav Raichl"
      },
      {
        "letter": "C",
        "text": "Simon Katolicky"
      },
      {
        "letter": "D",
        "text": "Oskar Lisler"
      },
      {
        "letter": "E",
        "text": "Jakub Lev"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 263850271,
    "question_type": "Q5_hockey_player_name_10000x40",
    "question": "Identify the player's name performing Faceoff in this hockey video.",
    "options": [
      {
        "letter": "A",
        "text": "Dylan Handel"
      },
      {
        "letter": "B",
        "text": "Malachi Franklin"
      },
      {
        "letter": "C",
        "text": "Lucas Ouellette"
      },
      {
        "letter": "D",
        "text": "Corson Nordick"
      },
      {
        "letter": "E",
        "text": "Nicolas Melnychuk"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 403434449,
    "question_type": "Q5_hockey_player_name_10000x40",
    "question": "Identify the player's name performing Touch in this hockey video.",
    "options": [
      {
        "letter": "A",
        "text": "Dmitri Gromov"
      },
      {
        "letter": "B",
        "text": "Vladimir Mukhin-Demidov"
      },
      {
        "letter": "C",
        "text": "Yegor Bashlykov"
      },
      {
        "letter": "D",
        "text": "Alexander Mirzabalayev"
      },
      {
        "letter": "E",
        "text": "Alexsander Zverev"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 399169140,
    "question_type": "Q5_hockey_player_name_10000x40",
    "question": "Determine which player performs Breakout successful in this hockey video.",
    "options": [
      {
        "letter": "A",
        "text": "Luke Strickland"
      },
      {
        "letter": "B",
        "text": "Jacob Osborne"
      },
      {
        "letter": "C",
        "text": "Ethan Morrow"
      },
      {
        "letter": "D",
        "text": "Barret Joynt"
      },
      {
        "letter": "E",
        "text": "Caden Faulkner"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 250108425,
    "question_type": "Q6_which_period",
    "question": "Identify the period of the game that is currently in progress.",
    "options": [
      {
        "letter": "A",
        "text": "3"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "2"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 446237632,
    "question_type": "Q6_which_period",
    "question": "What is the current period of the hockey game?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "3"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 481436506,
    "question_type": "Q6_which_period",
    "question": "What period is the game currently in?",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "1"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 625453986,
    "question_type": "Q6_which_period",
    "question": "Identify which period the game is in at this moment on the ice.",
    "options": [
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "3"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 104172051,
    "question_type": "Q6_which_period",
    "question": "Based on the scoreboard, identify the current period of play.",
    "options": [
      {
        "letter": "A",
        "text": "2"
      },
      {
        "letter": "B",
        "text": "3"
      },
      {
        "letter": "C",
        "text": "1"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 476223437,
    "question_type": "Q6_which_teams",
    "question": "Indicate the names of the two hockey teams shown in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Fort Wayne Komets and Kansas City Mavericks"
      },
      {
        "letter": "B",
        "text": "Kansas City Mavericks and Tulsa Oilers"
      },
      {
        "letter": "C",
        "text": "Bloomington Bison and Allen Americans"
      },
      {
        "letter": "D",
        "text": "Allen Americans and Utah Grizzlies"
      },
      {
        "letter": "E",
        "text": "Railers Junior Hockey Club Premier and Colorado Eagles"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 492814773,
    "question_type": "Q6_which_teams",
    "question": "Identify the teams participating in this hockey game.",
    "options": [
      {
        "letter": "A",
        "text": "Halmstad Hammers HC J20 and IF Molndal Hockey J20"
      },
      {
        "letter": "B",
        "text": "Tyreso&Hanviken J20 and Nacka HK J20"
      },
      {
        "letter": "C",
        "text": "Stromsbro IF J20 and Backen HC J20"
      },
      {
        "letter": "D",
        "text": "AIK Harnosand J20 and Tyreso&Hanviken J20"
      },
      {
        "letter": "E",
        "text": "Haninge Anchors J20 and Nassjo HC J20"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 249632904,
    "question_type": "Q6_which_teams",
    "question": "Identify the two participating teams in this matchup.",
    "options": [
      {
        "letter": "A",
        "text": "Vernon Vipers and Alberni Bulldogs White"
      },
      {
        "letter": "B",
        "text": "Nanaimo Clippers and Wenatchee Wild BCHL"
      },
      {
        "letter": "C",
        "text": "Powell River Team Green and Alberni Bulldogs Red"
      },
      {
        "letter": "D",
        "text": "BCHL Top Prospects Team 1 and Trail Smoke Eaters (BCHL)"
      },
      {
        "letter": "E",
        "text": "Okotoks Oilers and Coquitlam Express"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 132573822,
    "question_type": "Q6_which_teams",
    "question": "Which teams are facing each other in this video segment?",
    "options": [
      {
        "letter": "A",
        "text": "Westfort Maroons U15 AA and Ak Bars Kazan"
      },
      {
        "letter": "B",
        "text": "The Winchendon School Wapiti Boys Varsity and Gyergyoi Hoki Klub"
      },
      {
        "letter": "C",
        "text": "KRIF Hockey and Stanstead College Varsity"
      },
      {
        "letter": "D",
        "text": "Dallas Penguins 14U A and HC Prostejov"
      },
      {
        "letter": "E",
        "text": "HC Vita Hasten and Malmo Redhawks"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 91087413,
    "question_type": "Q6_which_teams",
    "question": "Identify the two participating teams in this matchup.",
    "options": [
      {
        "letter": "A",
        "text": "HC Saryarka Karaganda and Gornyak-UGMK"
      },
      {
        "letter": "B",
        "text": "Gornyak-UGMK and HC Dynamo Balashikha"
      },
      {
        "letter": "C",
        "text": "Olimpiya Kirovo-Chepetsk and HC Zauralie Kurgan"
      },
      {
        "letter": "D",
        "text": "HC Dynamo Saint Petersburg and Tsen Tou Jilin"
      },
      {
        "letter": "E",
        "text": "CSK VVS Samara and HC Khimik Voskresensk"
      }
    ],
    "correct_answer": "E"
  }
];
