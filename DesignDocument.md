# Wordy Design Document

## 1. Introduction

Wordle is a popular word game, now owned by the New York Times. What better way than to learn how this works than to make a clone of this game. So hear we are, a wordle clone for learning.

## 2. Product / Solution Overview

The final solution will provide fun for the user, guessing which letters are in the 5 letter word. It will help train their brain to learn words and descramble faster in the future.

## 3. Business Needs / Requirements

Give the user 6 guesses to find the 5 letter word, each guess provides a result of what letter is in the word, what letter is in the word and right position and which letter is not in the word.

## 4. Major Features

Guess a 5 letter word using 6 guesses only. Highlighting of good and bad letters, some basic scoring system to track game history.

## 5. Scope and Limitations

1. Random word from 5 letter word list
2. Give 6 guesses to find the word
3. On screen keyboard
4. Highlight the letters not used
5. Highlight the letters used but wrong position
6. Highlight the letters used and in right position
7. Let them know when a word is invalid
   1. English words only
   2. May not include all 5 letter words in the dictionary.
8. Keep some basic statistics of their game history
   1. Saved by mac address, so playing game from multiple accounts will not keep track.

## 1. Considerations

#### 1.1 Assumptions

_In this section describe any assumptions, background, or dependencies of the software, its use, the operational environment, or significant project issues._

#### 1.2 Constraints

_In this section describe any constraints on the system that have a significant impact on the design of the system._

#### 1.3 System Environment

_In this section describe the system environment on which the software will be executing. Include any specific reasons why this system was chosen and if there are any plans to include new sections to the list of current ones._

## 2. Architecture

#### 2.1 Overview

_Provide here a descriptive overview of the software/system/application architecture._

#### 2.2 Component Diagrams

_Provide here the diagram and a detailed description of its most valuable parts. There may be multiple diagrams. Include a description for each diagram. Subsections can be used to list components and their descriptions._

#### 2.3 Class Diagrams

_Provide here any class diagrams needed to illustrate the application. These can be ordered by which component they construct or contribute to. If there is any ambiguity in the diagram or if any piece needs more description provide it here as well in a subsection._

#### 2.4 Sequence Diagrams

_Provide here any sequence diagrams. If possible list the use case they contribute to or solve. Provide descriptions if possible._

#### 2.5 Deployment Diagrams

_Provide here the deployment diagram for the system including any information needed to describe it. Also, include any information needed to describe future scaling of the system._

#### 2.6 Other Diagrams

_Provide here any additional diagrams and their descriptions in subsections._

## 3 User Interface Design

_Provide here any user interface mock-ups or templates. Include explanations to describe the screen flow or progression._

## 4 Appendices and References

#### 4.1 Definitions and Abbreviations

_List here any definitions or abbreviations that could be used to help a new team member understand any jargon that is frequently referenced in the design document._

#### 4.2 References

_List here any references that can be used to give extra information on a topic found in the design document. These references can be referred to using superscript in the rest of the document._

# Wordy Design Document

## 1. Overview

Wordle is a popular word game, now owned by the New York Times. What better way than to learn how this works than to make a clone of this game. So hear we are, a wordle clone for learning.

## 2. Context

The final solution will provide fun for the user, guessing which letters are in the 5 letter word. It will help train their brain to learn words and descramble faster in the future. It will also help me further my skills in developement.

## 3. Goals and Non-Goals

1. Learn

## 4. Milestones

A list of measurable checkpoints, so your PM and your manager’s manager can skim it and know roughly when different parts of the project will be done. I encourage you to break the project down into major user-facing milestones if the project is more than 1 month long.

Use calendar dates so you take into account unrelated delays, vacations, meetings, and so on. It should look something like this:

Start Date: June 7, 2018
Milestone 1 — New system MVP running in dark-mode: June 28, 2018
Milestone 2 - Retire old system: July 4th, 2018
End Date: Add feature X, Y, Z to new system: July 14th, 2018

Add an [Update] subsection here if the ETA of some of these milestone changes, so the stakeholders can easily see the most up-to-date estimates.

## 5. Existing Solution

In addition to describing the current implementation, you should also walk through a high level example flow to illustrate how users interact with this system and/or how data flow through it.

A user story is a great way to frame this. Keep in mind that your system might have different types of users with different use cases.

## 6. Proposed Solution

Some people call this the Technical Architecture section. Again, try to walk through a user story to concretize this. Feel free to include many sub-sections and diagrams.

Provide a big picture first, then fill in lots of details. Aim for a world where you can write this, then take a vacation on some deserted island, and another engineer on the team can just read it and implement the solution as you described.

## 7. Alternative Solutions

What else did you consider when coming up with the solution above? What are the pros and cons of the alternatives? Have you considered buying a 3rd-party solution — or using an open source one — that solves this problem as opposed to building your own?

## 8. Testability, Monitoring and Alerting

I like including this section, because people often treat this as an afterthought or skip it all together, and it almost always comes back to bite them later when things break and they have no idea how or why.

## 9. Cross-Team Impact

How will this increase on call and dev-ops burden?
How much money will it cost?
Does it cause any latency regression to the system?
Does it expose any security vulnerabilities?
What are some negative consequences and side effects?
How might the support team communicate this to the customers?

## 10. Open Questions

Any open issues that you aren’t sure about, contentious decisions that you’d like readers to weigh in on, suggested future work, and so on. A tongue-in-cheek name for this section is the “known unknowns”.

## 11. Detailed Scoping and Timeline

## 2. Product / Solution Overview

The final solution will provide fun for the user, guessing which letters are in the 5 letter word. It will help train their brain to learn words and descramble faster in the future.

## 3. Business Needs / Requirements

Give the user 6 guesses to find the 5 letter word, each guess provides a result of what letter is in the word, what letter is in the word and right position and which letter is not in the word.

## 4. Major Features

Guess a 5 letter word using 6 guesses only. Highlighting of good and bad letters, some basic scoring system to track game history.

## 5. Scope and Limitations

1. Random word from 5 letter word list
2. Give 6 guesses to find the word
3. On screen keyboard
4. Highlight the letters not used
5. Highlight the letters used but wrong position
6. Highlight the letters used and in right position
7. Let them know when a word is invalid
   1. English words only
   2. May not include all 5 letter words in the dictionary.
8. Keep some basic statistics of their game history
   1. Saved by mac address, so playing game from multiple accounts will not keep track.

## 1. Considerations

#### 1.1 Assumptions

_In this section describe any assumptions, background, or dependencies of the software, its use, the operational environment, or significant project issues._

#### 1.2 Constraints

_In this section describe any constraints on the system that have a significant impact on the design of the system._

#### 1.3 System Environment

_In this section describe the system environment on which the software will be executing. Include any specific reasons why this system was chosen and if there are any plans to include new sections to the list of current ones._

## 2. Architecture

#### 2.1 Overview

_Provide here a descriptive overview of the software/system/application architecture._

#### 2.2 Component Diagrams

_Provide here the diagram and a detailed description of its most valuable parts. There may be multiple diagrams. Include a description for each diagram. Subsections can be used to list components and their descriptions._

#### 2.3 Class Diagrams

_Provide here any class diagrams needed to illustrate the application. These can be ordered by which component they construct or contribute to. If there is any ambiguity in the diagram or if any piece needs more description provide it here as well in a subsection._

#### 2.4 Sequence Diagrams

_Provide here any sequence diagrams. If possible list the use case they contribute to or solve. Provide descriptions if possible._

#### 2.5 Deployment Diagrams

_Provide here the deployment diagram for the system including any information needed to describe it. Also, include any information needed to describe future scaling of the system._

#### 2.6 Other Diagrams

_Provide here any additional diagrams and their descriptions in subsections._

## 3 User Interface Design

_Provide here any user interface mock-ups or templates. Include explanations to describe the screen flow or progression._

## 4 Appendices and References

#### 4.1 Definitions and Abbreviations

_List here any definitions or abbreviations that could be used to help a new team member understand any jargon that is frequently referenced in the design document._

#### 4.2 References

_List here any references that can be used to give extra information on a topic found in the design document. These references can be referred to using superscript in the rest of the document._

1. Random word from 5 letter word list
   1. Restrict to only 5 letter words only.
2. Give 6 guesses to find the word
3. Highlight the letters not used
4. Highlight the letters used but wrong position
5. Highlight the letters used and in right position
6. Let them know when a word is invalid
   1. English words only
   2. Can we incorporate all 5 letter words in the dictionary.
7. Keep some basic statistics of their game history
   1. Saved by mac address, so playing game from multiple accounts will not keep track.
