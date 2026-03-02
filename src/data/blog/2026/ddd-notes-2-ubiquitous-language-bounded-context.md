---
publishTime: 2026-01-26T15:22:00Z
title: "Domain Driven Design (notes) -2- Ubiquitous Language and Bounded Context (Strategic Design)"
tags:
  - notes
  - DDD
description: "Common sense is not common"
---

## Ubiquitous Language

> “Common sense is not common.” — Voltaire

- Knowledge belongs to domain experts. It’s crucial for us to understand domain experts and to use the **same business terminology** they use.

- In traditional software development, domain knowledge is translated into an analysis model. The analysis model is then translated into requirements, system design, and finally source code. **In every translation, some information is lost.**

- Ubiquitous Language is the language of the business. It should **not include technical jargon**.

- **All project stakeholders** (engineers, product owners, designers, domain experts) should use the ubiquitous language when they describe the business domain.

- The ubiquitous language should be continuously reinforced throughout the project. Requirements, tests, documentation, and even the source code itself should use this language.

- Domain experts must feel comfortable using the ubiquitous language.

- The ubiquitous language must be **precise and consistent**. It should eliminate the need for **assumptions** and make the business domain logic **explicit**.

- Each term in the ubiquitous language should have **one and only one meaning**. Two terms should not be used interchangeably.

- Cultivation of the ubiquitous language is an **ongoing process**. It should be constantly validated and evolved.

- Capturing behavior is crucial. Behavior is not merely a list of verbs associated with nouns; it is the actual business logic, including its rules, assumptions, and invariants.

- The [Gherkin](https://cucumber.io/docs/gherkin/reference) language can be used to support the cultivation and management of the ubiquitous language.

---

## Model

> A model is a simplified representation of a thing or phenomenon that intentionally emphasizes certain aspects while ignoring others.

- A model is not a copy of the real world, but a human construct that helps us make sense of real-world systems.

- A canonical example of a model is a map. There are different types of maps—terrain, subway, heat maps, and so on. None of these maps represents every detail of our planet. Instead, each map contains **just enough information** to support its **specific purpose**.

- In essence, a model is an abstraction that allows us to handle complexity by omitting unnecessary details and leaving only what is needed to solve the problem at hand.

---

## Bounded Context (Strategic Design)

- Divide the ubiquitous language into multiple smaller languages and assign each one to the explicit context in which it can be applied: its **bounded context**.

- Bounded contexts are the **consistency boundaries** of the ubiquitous language. A language’s terminology, principles, and business rules are only consistent within its bounded context.

- A map is useful and consistent only within the scope of its specific purpose.

- Defining the scope of a ubiquitous language—its bounded context—is a **strategic design decision**.

- Identify sets of coherent use cases that operate on the same data, and avoid decomposing them into multiple bounded contexts unnecessarily.

- A bounded context’s size, by itself, is not a deciding factor. Models should not necessarily be small or large; they need to be **useful**.

- **Subdomains** are **discovered**, while **bounded contexts** are **designed**. Subdomains are defined by business strategy.

- A model is intended to solve a specific problem. In some cases, it can be beneficial to use multiple models of the same concept simultaneously to solve different problems.

- It may be reasonable to use different models of the same subdomain to address different needs.

- Each bounded context should be implemented, evolved, and versioned as an **independent project**.

- “Good fences make good neighbors.” A bounded context should be owned by **only one team**, while a single team may own multiple bounded contexts.

- In the bounded context of botany, a tomato is a **fruit**, while in the bounded context of culinary arts, it is a **vegetable**.


