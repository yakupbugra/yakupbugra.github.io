---
pubDatetime: 2020-01-18T15:22:00Z
title: "SOLID Principles (Notes)"
tags:
  - notes
  - architecture
description:
    "My notes on studying SOLID principles"
---

## Single Responsibility

- A class should have one and only one reason to change, meaning that a class should only have one job.
- Define responsibilities
- Strive for high cohesion and loose coupling
- Keep classes small, focused, testable

## Open Closed

- Objects or entities should be open for extension, but closed for modification.
- Open for extension means that we should be able to add new features or components to the application without breaking existing code.
- Closed for modification means that we should not introduce breaking changes to existing functionality, because that would force you to refactor a lot of existing code
- Balance abstraction and concreteness. Abstraction adds complexity. Predict where variation is needed and apply abstraction as needed.
- When you use new keyword, you are being concrete. new is glue. Dependency Injection..
- Implement new features in new classes. In this way, you can add behavior without touching existing code.

## Liskov Substitution Principle

- Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.
- Subtypes must be substitutable for their base types.
- Tell, Don't Ask: Rather than asking an object for data and acting on that data, we should instead tell an object what to do.

## Interface Segregation

- A client should not be forced to implement an interface that it doesn't use.
- A client shouldn't be forced to depend on methods they do not use.
- Split interfaces in behaviours. I….able interface.

## Dependency Inversion

- High level modules should not depend on low level modules. Both should depend on abstractions.
- Entities must depend on abstractions not on concretions.