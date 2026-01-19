---
pubDatetime: 2024-09-10T15:22:00Z
title: "Software Architecture Notes - 1"
tags:
  - notes
  - architecture
description: 
    "These notes consists of my highlights from Software Architecture For Developers book that I strongly recommend to read"
---


These notes consists of my highlights from "Software Architecture For Developers" book that I strongly recommend to read: https://leanpub.com/software-architecture-for-developers

## What is software architecture?

- **Application Architecture**: It puts the application in focus and normally includes things such as decomposing the application into its classes and components, making sure design patterns are used in the right way, building or using frameworks etc.
- **System Architecture**: One step up in scale from application architecture. A software system is composed of multiple applications across a number of technologies. System architecture brings all the those separate applications together. Additionally includes the concerns about integration with other systems within the environment. The building blocks are mix of software and hardware, including things like programming languages and software frameworks.
- **Software Architecture**: is simple combination of application and system architecture. In other words, it's anything and everything related to elements of software system; from structure to foundations of the code through to successful deployment of that code into a live environment. Software developers focus on the code thinking about things like OOP, classes, interfaces, IoC, refactoring, automated unit testing, clean code. Who is thinking about other stuff like:
  - Cross-cutting concerns such as logging and exception handling
  - Security; including authentication, authorisation and sensitive data
  - Performance, scalability, availability and other quality attributes
  - Audit and other requlatory requirements
  - Real-word constraints of the environment
  - Interoperability/Integration with other software systems
  - Operational, support and maintenance reqirements
  - Consistency of structure
- **Enterprise Architecture**: It looks at how to organize and utilize people, process and technology to make an organization work effectively and efficiently. The mindset required to undertake enterprise architecture is very different to software architecture. It requires higher level of abstraction. Its about breadth rather than depth, strategy rather than code.

## What is difference between design and architecture?

- All architecture is design but not all design is architecture.
- Architecture represents the significant design decisions that shape a system, where significance is measure by cost of change. Significant decisions are "architecture" and that everything else is design.

## A lack of software architecture causes problems

- Does your software system have a well defined architecture?
- Is everybody on the team implementing features in a consistent way?
- Is there a shared vision for how the software will be built across the team?
- Does everybody on the team have the necessary amount of technical guidance?
- Is there an appropriate amount of technical leadership?

If nobody thinks about software architecture, the end result is something that typically looks like a big ball of mud.

## The benefits of software architecture

- A clear vision and roadmap for the team to follow
- Technical leadership and better coordination
- A stimulus to talk to people in order the answer questions relating to significant decisions, non functional requirements, constraints and other cross-cutting concerns
- A framework for identifying and mitigating risk
- Consistency of approach and standards, leading to well structured codebase
- A set of firm foundations for the product being build
- A structure with which to communicate the solution at different levels of abstraction to different audiences

## The software architecture role

Becoming a software architect isn't something that simply happens overnight or with a promotion. It's a role, not a rank. It's the result of an evolutionary process where you'll gradually gain the experience and confidence that you need to undertake the role.

- **Architectural drivers**:
  - Functional requirements
  - Quality attributes: performance, scalability, availability, security, disaster recovery, accessibility, monitoring, management, audit, flexibility, extensibility, maintainability, legal and regulatory and compliance, internationalisation, localisation
  - Constraints: technology constraints (approved technology list, existing system, target platform..), people constraints (team size, skills), organisational constraints
  - Principles: Coding standards and conventions, automated unit testing, static analysis tools, best practices..
- **Designing software**: Creating the technical strategy, vision, roadmap. Designing software from scratch versus extending an existing one.
- **Technical risks**: Identifying, mitigating and owning the technical risks to ensure that the architecture works
- **Quality assurance**: Introducing and adherence to standards, guidelines, principles etc.
- **Architecture Evolution**: Continuous technical leadership and ownership of the architecture throughout the software delivery
- **Coding**: Involvement in the hands-on elements of the software delivery

## Should software architects code?

Make the coding a part of your role as software architect. You don't need to be the best coder on the team but the benefits of being hands-on and engaged in the delivery process are huge. After all, there is a difference between knowing and doing. Coding provides incentive to ensure that your designs are grounded in reality.

- Building prototypes and proof of concepts related to the software system in question is a great way to be involved.
- Getting involved with the code reviews is one way to at least keep your mind fresh with technology and how its being used.
- Developers are likely to ignore your coding experience if you aren't programming on the project.

## Breadth of knowledge

The software architect should be able to answer the following questions:

- Is the technology that we have chosen the most appropriate given the other options available?
- What are other options for the design and build of this system?
- Is there common architectural pattern that we should be using?

## Soft Skills

- **Leadership**: is ability to create a shared vision and take people on a journey to satisfy the common goal
- **Communication**: You can have the best ideas and vision but you are dead if you are unable to effectively communicate this to others.
- **Influencing**: Good influencing requires good listening and exploring skills.
- **Confidence**: doesn't mean arrogance.
- **Collaboration**: listening, being open minded and responsive to feedback
- **Coaching**: you will need to coach people on their role, technologies etc.
- **Mentoring**: is about facilitating somebody's learning rather than telling them how to do something.
- **Motivation**: keeping the team happy, up-beat and positive.
- **Facilitation**: you need to step back and facilitate discussions particularly where there is a conflict within the team.
- **Responsibility**: You can't necessarily blame the rest of the software development team for failure. Its your problem if your software architecture doesn't satisfy.
- **Delegation**: there is a fine line between delegating everything and doing everything yourself.

## Software architecture introduces control?

Provide Guidance, strive for consistency. Guidance and consistency can only be realised by introducing a degree of control and restraint. Start with some control and listen to feedback in order to fine-tune it as you progress. If the team are asking lots of "why" and "how" questions, then perhaps more guidance is needed. If it feels like the team are fighting against you all of the time, perhaps you have pushed too far.

## Domain Knowledge

A good working knowledge of the business domain is essential for architects.

## Authority

If you are responsible for the software architecture and technical delivery of the software system, you must have the authority to make decisions.

At the end of the day, every decision you make will have a trade-off whether that's related to performance, scalability, maintainability, the ability to find people with the right experience etc.