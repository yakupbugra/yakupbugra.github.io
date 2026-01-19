---
pubDatetime: 2025-03-01T15:22:00Z
title: "Domain Driven Design Distilled (Notes)"
tags:
  - DDD
description:
    "Domain-Driven Design Distilled 1st Edition by Vaughn Vernon"
---

Domain-Driven Design Distilled 1st Edition by Vaughn Vernon [https://www.amazon.com/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420/](https://www.amazon.com/Domain-Driven-Design-Distilled-Vaughn-Vernon/dp/0134434420/)

### Good, Bad and Effective Design

- Software development is considered as cost center rather than a profit center.
- Developers are too wrapped up with technology and trying to solve problems using technology rather than careful thought and design.
- The database is given too much priority, and most discussions about the solutions center around the database and data model rather than business processes and operations.
- Developers don't give proper emphasis to naming objects and operations according to the business purpose that they fill. This is generally a result of poor collaboration with the business.
- Developers house business logic in user interface components and persistence components. Also developers often perform persistence operations in the middle of business logic.
- Questions about whether design is necessary or affordable are quite beside the point: design is inevitable. The alternative to good design is bad design, not no design at all.
- If you afraid that producing software with thoughtful design is expensive, think of how much more expensive it's going to be live with or even fix a bad design.
- A word closely related to good is effective, and it possible more accurately states what we should strive for in software design: effective design.

### Strategic Design with Bounded Context and the Ubiquitous Language

- You really cannot apply tactical design in an effective way unless you begin with strategic design.
- In short, DDD is primarily about modeling a Ubiquitous Language and explicitly Bounded Context.
- A Bounded Context is a semantic contextual boundary. This means that within the boundary each component of the software model has a specific meaning and does specific things.
- As your model starts to take on deeper meaning and clarity, your Bounded Context will quickly transition to your solution space.
- Your problem space is where you perform high-level strategic analysis and design steps within the constraints of a given project.
- The software model inside the context boundary reflects a language. It's developed by the team working in the Bounded Context and is spoken by every member of the team. The language is called Ubiquitous Language.
- A notable written form of the language is the software model's source code.
- Your solution space is where you actually implement the solution that your problem space discussions identify as your Core Domain.
- When the Bounded Context is being developed as key strategic initiative of your organization, it's called Core Domain.
- You choose wisely what should be part of your Core Domain and what should not.
- There should be one team assigned to work on one Bounded Context.
- There should be a separate source code repository for each Bounded Context.
- It's possible that one team could work on multiple Bounded Context, but multiple teams should not work on a single Bounded Context.
- Separate the database schema for each Bounded Context.
- Separate the Ubiquitous Language for each Bounded Context.
- It's possible that people from other teams would have different meaning for the same terminology, because their business knowledge is within a different context; they are developing different Bounded Context. Consider that each business function likely has different definitions for the same term. If there are 3 meanings of a term, then there are 3 Bounded Contexts.
- Focus on business complexity, not technical complexity. Developers have to dig into the business model with Domain Experts.
- Is your Ubiquitous Language formed from a set of well-known nouns? Nouns are important but often software developers put too much emphasis on the nouns within a domain model, forgetting that spoken language is composed of far more than nouns alone.
- Don't limit your Core Domain to nouns alone. Rather, consider expressing your Core Domain as a set of concrete scenarios about what the domain model is supposed to do. Behavior-Driven Development. Unit test based approach.

### Strategic Design with Subdomains

- A Subdomain is a sub-part of your overall business domain. It's responsible for providing solution to core area of your business.
- Types of Subdomains:
  - Core Domain: This is where you are making a strategic investment in a single, well-defined domain model, committing significant resources for carefully crafting your Ubiquitous Language in an explicit Bounded Context.
  - Supporting Subdomain: This is a modeling situation that calls for custom development because an off-the-shelf solution doesn't exist. You may want to consider outsourcing this kind of Bounded Context. This is still an important software model because your Core Domain cannot be successful without it.
  - Generic Subdomain: This kind of solution may be available for purchase off the shelf but may also be outsourced or even developed in house by a team that doesn't have the kind of elite developers.
- A Bounded Context should align one-to-one with a single Subdomain.

### Strategic Design with Context Mapping

- Core Domain would have to integrate with other Bounded Contexts. That integration is known in DDD as Context Mapping.
- It could be RPC, SOAP, RESTful interfaces. Or it could be messaging interface using queues or Publish-Subscribe.
- When using asynchronous messaging to integrate, typically an Aggregate in one Bounded Context publishes a Domain Event which could be consumed by any number of interested parties.
- The messaging mechanism should support At-Least-Once Delivery to ensure that all messages will be received eventually. This also means that the subscribing Bounded Context must be implemented as Idempotent Receiver.
- Idempotent Receiver describes how the receiver of a request performs an operation in such a way that it produces the same result even if it is performed multiple times.

### Tactical Design with Aggregates

- Tactical design is like using a thin brush to paint the fine details of your domain model. One of the more important tools is used to aggregate entities and value objects together into right-sized clusters. It's the Aggregate Pattern.
- An Entity models an individual thing. Each entity has a unique identity. The states of the entity will change over time.
- Each Aggregate is composed of one or more Entities, where one Entity is called the Aggregate Root.
- Aggregates may also have Value Objects.
- A Value Object models an immutable conceptual whole. Unlike the Entity, it doesn't have a unique identity and equivalence is determined by comparing the attributes encapsulated by the Value type.
- The name of the Root Entity is the Aggregate's conceptual name. You should choose a name that properly describes the conceptual whole that the Aggregate models.
- Each Aggregate forms a transactional consistency boundary. This means that within a single Aggregate, all composed parts must be consistent. If the Aggregate was not stored in a whole and valid state, the business operation that was performed would be considered incorrect.
- A general rule of Aggregate design: Modify and commit only one Aggregate instance in one transaction.
- Design small Aggregates. Start by creating every Aggregate with just one Entity which will serve as Aggregate Root.
- Reference other Aggregates by identity only.
- Update other Aggregates using eventual consistency.
- Watch out for leaking business logic into Application Services about your domain model.

### Tactical Design with Domain Events

- A Domain Event is a record of some business-significant occurrence, that is a verb in the past tense.
- You must show care in how you name your Domain Event types. The words you use should reflect your model's Ubiquitous Language. Each of the names clearly and concisely states what happened in your Core Domain.
- The Command is named CreateProduct so you can say that ProductCreated is the result of the command. The ProductCreated event should hold all the properties that were provided with the CreateProduct command.
- It's important that the modified Aggregate and the Domain Event be saved together in the same transaction.
- Once your Domain Event is saved to the event store, it can be published to any interested parties.
- A command may be rejected but a Domain Event is a matter of history and cannot logically be denied.
- Event Sourcing can be described as persisting all Domain Events that have occurred for an Aggregate instance. Ordered as they originally occurred, they make up its event stream.