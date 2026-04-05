const QUESTIONS = [
  {
    "id": 1167249088,
    "question_type": "Q1_primary_action_recognition",
    "question": "What action is being carried out in this clip?",
    "options": [
      {
        "letter": "A",
        "text": "corner"
      },
      {
        "letter": "B",
        "text": "clearance"
      },
      {
        "letter": "C",
        "text": "goalkeeper exit"
      },
      {
        "letter": "D",
        "text": "shot"
      },
      {
        "letter": "E",
        "text": "acceleration"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 2390550879,
    "question_type": "Q1_primary_action_recognition",
    "question": "Determine the main soccer action demonstrated in this video segment.",
    "options": [
      {
        "letter": "A",
        "text": "clearance"
      },
      {
        "letter": "B",
        "text": "interception"
      },
      {
        "letter": "C",
        "text": "infraction"
      },
      {
        "letter": "D",
        "text": "corner"
      },
      {
        "letter": "E",
        "text": "shot"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 1730758348,
    "question_type": "Q1_primary_action_recognition",
    "question": "What is the action taking place in this soccer video?",
    "options": [
      {
        "letter": "A",
        "text": "corner"
      },
      {
        "letter": "B",
        "text": "penalty"
      },
      {
        "letter": "C",
        "text": "goalkeeper exit"
      },
      {
        "letter": "D",
        "text": "infraction"
      },
      {
        "letter": "E",
        "text": "duel"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 2425424066,
    "question_type": "Q1_primary_action_recognition",
    "question": "Name the action illustrated in this soccer footage.",
    "options": [
      {
        "letter": "A",
        "text": "throw in"
      },
      {
        "letter": "B",
        "text": "goal kick"
      },
      {
        "letter": "C",
        "text": "own goal"
      },
      {
        "letter": "D",
        "text": "infraction"
      },
      {
        "letter": "E",
        "text": "offside"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 1057299993,
    "question_type": "Q1_secondary_action_recognition",
    "question": "What soccer action is being carried out in this clip?",
    "options": [
      {
        "letter": "A",
        "text": "carry"
      },
      {
        "letter": "B",
        "text": "head shot"
      },
      {
        "letter": "C",
        "text": "foul"
      },
      {
        "letter": "D",
        "text": "counterpressing recovery"
      },
      {
        "letter": "E",
        "text": "lateral pass"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1748815306,
    "question_type": "Q1_secondary_action_recognition",
    "question": "Name the action illustrated in this soccer footage.",
    "options": [
      {
        "letter": "A",
        "text": "touch in box"
      },
      {
        "letter": "B",
        "text": "lateral pass"
      },
      {
        "letter": "C",
        "text": "yellow card"
      },
      {
        "letter": "D",
        "text": "foul"
      },
      {
        "letter": "E",
        "text": "head shot"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 2405836831,
    "question_type": "Q2_action_sequence",
    "question": "Can you list the actions in the order they take place in the soccer footage?",
    "options": [
      {
        "letter": "A",
        "text": "pass, pass, clearance"
      },
      {
        "letter": "B",
        "text": "pass, duel, shot"
      },
      {
        "letter": "C",
        "text": "throw_in, pass, pass"
      },
      {
        "letter": "D",
        "text": "pass, shot, shot_against"
      },
      {
        "letter": "E",
        "text": "pass, acceleration, pass"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1060733820,
    "question_type": "Q2_action_sequence",
    "question": "Can you list the actions in the order they take place in the soccer footage?",
    "options": [
      {
        "letter": "A",
        "text": "pass, duel, pass"
      },
      {
        "letter": "B",
        "text": "throw_in, pass, pass"
      },
      {
        "letter": "C",
        "text": "pass, duel, shot"
      },
      {
        "letter": "D",
        "text": "touch, pass, touch"
      },
      {
        "letter": "E",
        "text": "corner, duel, shot"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 2383570120,
    "question_type": "Q2_action_sequence",
    "question": "In what order do the soccer actions occur in this clip?",
    "options": [
      {
        "letter": "A",
        "text": "pass, duel, game_interruption"
      },
      {
        "letter": "B",
        "text": "pass, acceleration, pass"
      },
      {
        "letter": "C",
        "text": "pass, acceleration, duel"
      },
      {
        "letter": "D",
        "text": "pass, pass, infraction"
      },
      {
        "letter": "E",
        "text": "pass, pass, offside"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1765369993,
    "question_type": "Q3_attack_flank",
    "question": "What direction is the attacking play moving in this soccer clip?",
    "options": [
      {
        "letter": "A",
        "text": "left"
      },
      {
        "letter": "B",
        "text": "center"
      },
      {
        "letter": "C",
        "text": "right"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 2064975561,
    "question_type": "Q3_attack_flank",
    "question": "What is the attacking direction of the team in this video?",
    "options": [
      {
        "letter": "A",
        "text": "right"
      },
      {
        "letter": "B",
        "text": "left"
      },
      {
        "letter": "C",
        "text": "center"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1472979118,
    "question_type": "Q3_attack_flank",
    "question": "In which direction is the team attacking during this clip?",
    "options": [
      {
        "letter": "A",
        "text": "center"
      },
      {
        "letter": "B",
        "text": "left"
      },
      {
        "letter": "C",
        "text": "right"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 1060735250,
    "question_type": "Q3_pass_accurate",
    "question": "Is the pass in this soccer video successful or not?",
    "options": [
      {
        "letter": "A",
        "text": "Successful"
      },
      {
        "letter": "B",
        "text": "Unsuccessful"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 2390549680,
    "question_type": "Q3_pass_accurate",
    "question": "Does the pass reach its intended target in this video?",
    "options": [
      {
        "letter": "A",
        "text": "Successful"
      },
      {
        "letter": "B",
        "text": "Unsuccessful"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1072549536,
    "question_type": "Q3_pass_accurate",
    "question": "Is the pass shown in this video accurate?",
    "options": [
      {
        "letter": "A",
        "text": "Successful"
      },
      {
        "letter": "B",
        "text": "Unsuccessful"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 2350908504,
    "question_type": "Q3_pass_height",
    "question": "What kind of pass does the player make in this video \u2014 high, low, or blocked?",
    "options": [
      {
        "letter": "A",
        "text": "high"
      },
      {
        "letter": "B",
        "text": "low"
      },
      {
        "letter": "C",
        "text": "blocked"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1474756281,
    "question_type": "Q3_pass_height",
    "question": "Is the pass in this soccer clip a high pass, a low pass, or blocked by a defender?",
    "options": [
      {
        "letter": "A",
        "text": "low"
      },
      {
        "letter": "B",
        "text": "blocked"
      },
      {
        "letter": "C",
        "text": "high"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1443024227,
    "question_type": "Q3_pass_height",
    "question": "Is the pass in this soccer clip a high pass, a low pass, or blocked by a defender?",
    "options": [
      {
        "letter": "A",
        "text": "low"
      },
      {
        "letter": "B",
        "text": "blocked"
      },
      {
        "letter": "C",
        "text": "high"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 2254657872,
    "question_type": "Q3_pass_height",
    "question": "Can you tell if the pass shown in the clip was high, low, or blocked?",
    "options": [
      {
        "letter": "A",
        "text": "high"
      },
      {
        "letter": "B",
        "text": "blocked"
      },
      {
        "letter": "C",
        "text": "low"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 1481760901,
    "question_type": "Q3_shot_body_part",
    "question": "What body part does the player use to make the shot in this footage?",
    "options": [
      {
        "letter": "A",
        "text": "head or other"
      },
      {
        "letter": "B",
        "text": "right foot"
      },
      {
        "letter": "C",
        "text": "left foot"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1028538142,
    "question_type": "Q3_shot_body_part",
    "question": "During the shot shown in this soccer clip, which body part makes contact with the ball?",
    "options": [
      {
        "letter": "A",
        "text": "head or other"
      },
      {
        "letter": "B",
        "text": "right foot"
      },
      {
        "letter": "C",
        "text": "left foot"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 1393953680,
    "question_type": "Q3_shot_body_part",
    "question": "What is the body part used by the player when shooting the ball in this clip?",
    "options": [
      {
        "letter": "A",
        "text": "right foot"
      },
      {
        "letter": "B",
        "text": "head or other"
      },
      {
        "letter": "C",
        "text": "left foot"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 2395475582,
    "question_type": "Q3_shot_expected_goal",
    "question": "What expected goal range best represents the shot shown in the video?",
    "options": [
      {
        "letter": "A",
        "text": "0.00 - 0.15"
      },
      {
        "letter": "B",
        "text": "0.16 - 0.30"
      },
      {
        "letter": "C",
        "text": "0.31 - 0.45"
      },
      {
        "letter": "D",
        "text": "0.61 - 0.75"
      },
      {
        "letter": "E",
        "text": "0.46 - 0.60"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1404815031,
    "question_type": "Q3_shot_expected_goal",
    "question": "What expected goal range best represents the shot shown in the video?",
    "options": [
      {
        "letter": "A",
        "text": "0.00 - 0.15"
      },
      {
        "letter": "B",
        "text": "0.16 - 0.30"
      },
      {
        "letter": "C",
        "text": "0.46 - 0.60"
      },
      {
        "letter": "D",
        "text": "0.31 - 0.45"
      },
      {
        "letter": "E",
        "text": "0.61 - 0.75"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1385682416,
    "question_type": "Q3_shot_expected_goal",
    "question": "Can you identify the expected goal range for this shot attempt?",
    "options": [
      {
        "letter": "A",
        "text": "0.00 - 0.15"
      },
      {
        "letter": "B",
        "text": "0.31 - 0.45"
      },
      {
        "letter": "C",
        "text": "0.46 - 0.60"
      },
      {
        "letter": "D",
        "text": "0.61 - 0.75"
      },
      {
        "letter": "E",
        "text": "0.16 - 0.30"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 2397987744,
    "question_type": "Q3_shot_goal",
    "question": "Does the shot successfully result in a goal in this video?",
    "options": [
      {
        "letter": "A",
        "text": "No Goal"
      },
      {
        "letter": "B",
        "text": "Goal"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1392003812,
    "question_type": "Q3_shot_goal",
    "question": "From the soccer clip, can you determine whether the shot is a goal or not?",
    "options": [
      {
        "letter": "A",
        "text": "No Goal"
      },
      {
        "letter": "B",
        "text": "Goal"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1365479316,
    "question_type": "Q3_shot_goal",
    "question": "Is the attempt shown in the clip converted into a goal?",
    "options": [
      {
        "letter": "A",
        "text": "No Goal"
      },
      {
        "letter": "B",
        "text": "Goal"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 2453839368,
    "question_type": "Q4_shot_spatial",
    "question": "What part of the goal does the shot hit in this video?",
    "options": [
      {
        "letter": "A",
        "text": "Goal Bottom Right"
      },
      {
        "letter": "B",
        "text": "Hit Post"
      },
      {
        "letter": "C",
        "text": "Goal Top Right"
      },
      {
        "letter": "D",
        "text": "Outer Center Right"
      },
      {
        "letter": "E",
        "text": "Goal Center Right"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1450157769,
    "question_type": "Q4_shot_spatial",
    "question": "Where in the goal does the shot land in this soccer clip?",
    "options": [
      {
        "letter": "A",
        "text": "Goal Center Left"
      },
      {
        "letter": "B",
        "text": "Outer Top Right"
      },
      {
        "letter": "C",
        "text": "Outer Center Right"
      },
      {
        "letter": "D",
        "text": "Goal Top Center"
      },
      {
        "letter": "E",
        "text": "Goal Bottom Center"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1765370162,
    "question_type": "Q4_shot_spatial",
    "question": "Which section of the goal does the ball enter in this clip?",
    "options": [
      {
        "letter": "A",
        "text": "Outer Bottom left"
      },
      {
        "letter": "B",
        "text": "Goal Center Right"
      },
      {
        "letter": "C",
        "text": "Goal Bottom Left"
      },
      {
        "letter": "D",
        "text": "Outer Center Left"
      },
      {
        "letter": "E",
        "text": "Outer Top Center"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1509407616,
    "question_type": "Q5_player_name",
    "question": "Can you tell which player carries out touch in this soccer play?",
    "options": [
      {
        "letter": "A",
        "text": "Roque Mesa"
      },
      {
        "letter": "B",
        "text": "Joaqu\u00edn Fern\u00e1ndez"
      },
      {
        "letter": "C",
        "text": "Luis P\u00e9rez"
      },
      {
        "letter": "D",
        "text": "Ra\u00fal Chasco"
      },
      {
        "letter": "E",
        "text": "S. Weissman"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1876424874,
    "question_type": "Q5_player_name",
    "question": "Who is the player shown performing clearance in this match footage?",
    "options": [
      {
        "letter": "A",
        "text": "Antonio S\u00e1nchez"
      },
      {
        "letter": "B",
        "text": "Fer Ni\u00f1o"
      },
      {
        "letter": "C",
        "text": "Nacho Vidal"
      },
      {
        "letter": "D",
        "text": "Salva Sevilla"
      },
      {
        "letter": "E",
        "text": "\u00c1ngel Rodr\u00edguez"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1300830027,
    "question_type": "Q5_player_name",
    "question": "Can you tell which player carries out shot against in this soccer play?",
    "options": [
      {
        "letter": "A",
        "text": "P. P\u0142acheta"
      },
      {
        "letter": "B",
        "text": "J. Sargent"
      },
      {
        "letter": "C",
        "text": "T. Krul"
      },
      {
        "letter": "D",
        "text": "B. Williams"
      },
      {
        "letter": "E",
        "text": "B. Gilmour"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 2144985754,
    "question_type": "Q5_player_name",
    "question": "Which player performs offside in the video segment?",
    "options": [
      {
        "letter": "A",
        "text": "Oriol Romeu"
      },
      {
        "letter": "B",
        "text": "P. Dame Ba"
      },
      {
        "letter": "C",
        "text": "V. Krapyvtsov"
      },
      {
        "letter": "D",
        "text": "A. Danjuma"
      },
      {
        "letter": "E",
        "text": "A. Dovbyk"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1830339755,
    "question_type": "Q5_player_position",
    "question": "Which position does the player performing infraction occupy in this soccer footage?",
    "options": [
      {
        "letter": "A",
        "text": "Left Wing Forward"
      },
      {
        "letter": "B",
        "text": "Right Wing Back"
      },
      {
        "letter": "C",
        "text": "Left Attacking Midfielder"
      },
      {
        "letter": "D",
        "text": "Right Winger"
      },
      {
        "letter": "E",
        "text": "Left Winger"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1472851679,
    "question_type": "Q5_player_position",
    "question": "Based on the clip, what is the field position of the player performing free kick?",
    "options": [
      {
        "letter": "A",
        "text": "Center Back"
      },
      {
        "letter": "B",
        "text": "Goalkeeper"
      },
      {
        "letter": "C",
        "text": "Left Center Back"
      },
      {
        "letter": "D",
        "text": "Left Wing Forward"
      },
      {
        "letter": "E",
        "text": "Right Center Midfielder"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1393955178,
    "question_type": "Q5_player_position",
    "question": "What is the position of the player who performs throw in in this soccer clip?",
    "options": [
      {
        "letter": "A",
        "text": "Left Center Back"
      },
      {
        "letter": "B",
        "text": "Second Striker"
      },
      {
        "letter": "C",
        "text": "Right Center Midfielder"
      },
      {
        "letter": "D",
        "text": "Right Winger"
      },
      {
        "letter": "E",
        "text": "Right Wing Forward"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 2029391451,
    "question_type": "Q5_player_position",
    "question": "Determine the player\u2019s position who carries out infraction in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Left Attacking Midfielder"
      },
      {
        "letter": "B",
        "text": "Right Defensive Midfielder"
      },
      {
        "letter": "C",
        "text": "Goalkeeper"
      },
      {
        "letter": "D",
        "text": "Right Wing Forward"
      },
      {
        "letter": "E",
        "text": "Left Winger"
      }
    ],
    "correct_answer": "E"
  },
  {
    "id": 1664369697,
    "question_type": "Q6_current_time",
    "question": "Approximately what time of the match does shot against happen in this clip?",
    "options": [
      {
        "letter": "A",
        "text": "53:30"
      },
      {
        "letter": "B",
        "text": "61:22"
      },
      {
        "letter": "C",
        "text": "47:57"
      },
      {
        "letter": "D",
        "text": "54:23"
      },
      {
        "letter": "E",
        "text": "56:43"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 2475044068,
    "question_type": "Q6_current_time",
    "question": "Can you identify the point of game time when throw in occurs in this footage?",
    "options": [
      {
        "letter": "A",
        "text": "75:02"
      },
      {
        "letter": "B",
        "text": "82:54"
      },
      {
        "letter": "C",
        "text": "84:06"
      },
      {
        "letter": "D",
        "text": "82:24"
      },
      {
        "letter": "E",
        "text": "93:35"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 1413328041,
    "question_type": "Q6_current_time",
    "question": "What is the closest match time corresponding to the moment when infraction occurs?",
    "options": [
      {
        "letter": "A",
        "text": "39:01"
      },
      {
        "letter": "B",
        "text": "30:05"
      },
      {
        "letter": "C",
        "text": "25:56"
      },
      {
        "letter": "D",
        "text": "19:50"
      },
      {
        "letter": "E",
        "text": "35:52"
      }
    ],
    "correct_answer": "C"
  },
  {
    "id": 2445836787,
    "question_type": "Q6_which_half",
    "question": "Can you tell which half of the match this footage belongs to?",
    "options": [
      {
        "letter": "A",
        "text": "First Half"
      },
      {
        "letter": "B",
        "text": "Second Half"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 2442375972,
    "question_type": "Q6_which_half",
    "question": "Identify whether the play shown in the clip is from the first or second half.",
    "options": [
      {
        "letter": "A",
        "text": "Second Half"
      },
      {
        "letter": "B",
        "text": "First Half"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1431445266,
    "question_type": "Q6_which_half",
    "question": "What half of the soccer game is taking place in this video?",
    "options": [
      {
        "letter": "A",
        "text": "Second Half"
      },
      {
        "letter": "B",
        "text": "First Half"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1745245149,
    "question_type": "Q6_which_half",
    "question": "Can you tell which half of the match this footage belongs to?",
    "options": [
      {
        "letter": "A",
        "text": "First Half"
      },
      {
        "letter": "B",
        "text": "Second Half"
      }
    ],
    "correct_answer": "A"
  },
  {
    "id": 1506416041,
    "question_type": "Q6_which_team",
    "question": "Specify the names of the two soccer teams shown in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Rayo Vallecano and Real Betis"
      },
      {
        "letter": "B",
        "text": "C\u00e1diz and Sevilla"
      },
      {
        "letter": "C",
        "text": "Osasuna and Athletic Bilbao"
      },
      {
        "letter": "D",
        "text": "Espanyol and Girona"
      },
      {
        "letter": "E",
        "text": "Osasuna and Getafe"
      }
    ],
    "correct_answer": "D"
  },
  {
    "id": 2455243266,
    "question_type": "Q6_which_team",
    "question": "Specify the names of the two soccer teams shown in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Legan\u00e9s and Atl\u00e9tico Madrid"
      },
      {
        "letter": "B",
        "text": "Real Sociedad and Espanyol"
      },
      {
        "letter": "C",
        "text": "Getafe and Atl\u00e9tico Madrid"
      },
      {
        "letter": "D",
        "text": "Espanyol and Barcelona"
      },
      {
        "letter": "E",
        "text": "Athletic Bilbao and Real Sociedad"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 1041996777,
    "question_type": "Q6_which_team",
    "question": "Which teams are featured in this soccer footage?",
    "options": [
      {
        "letter": "A",
        "text": "Sevilla and Villarreal"
      },
      {
        "letter": "B",
        "text": "C\u00e1diz and Barcelona"
      },
      {
        "letter": "C",
        "text": "Athletic Bilbao and Deportivo Alav\u00e9s"
      },
      {
        "letter": "D",
        "text": "Osasuna and Elche"
      },
      {
        "letter": "E",
        "text": "Real Betis and Getafe"
      }
    ],
    "correct_answer": "B"
  },
  {
    "id": 1509407061,
    "question_type": "Q6_which_team",
    "question": "Determine which teams are involved in the play shown in this clip.",
    "options": [
      {
        "letter": "A",
        "text": "Mallorca and Real Valladolid"
      },
      {
        "letter": "B",
        "text": "Real Valladolid and Getafe"
      },
      {
        "letter": "C",
        "text": "Sevilla and Real Valladolid"
      },
      {
        "letter": "D",
        "text": "Villarreal and C\u00e1diz"
      },
      {
        "letter": "E",
        "text": "Real Sociedad and Athletic Bilbao"
      }
    ],
    "correct_answer": "A"
  }
];
