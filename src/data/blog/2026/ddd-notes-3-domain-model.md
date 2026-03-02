---
publishTime: 2026-03-02T10:22:00Z
title: "Domain Driven Design (notes) -3- Domain Model (Tactical Design)"
tags:
  - notes
  - DDD
description: "Domain Model, Value Object, Entities, Aggregates, Events, Services"
---

- A **Domain Model**  is an object model of the domain that incorporates both behavior and data.

- The domain's business logic is already complex, so the objects used for modeling should not introduce additional complexities. The model should be devoid of any infra or tech concerns. 

- Domain Model allows the code to **speak** the **ubiquitous language**.

## Value Object

- A value object is defined by the composition of its attributes rather than by an identity. For example, an RGB color is determined by the specific combination of its red, green, and blue components. It does not have a unique identifier; two colors with the same RGB values are considered equal.

- Relying exclusively on the language's primitive data types (int, string..) to represent concepts of the business domain is know as **primitive obsession** code smell. 

- When to use value objects? The simple answer is, whenever you can.

- Since value objects are immutable, the value objects' behavior is free of side effects and is thread safe.

- Use value objects for the domain's elements that describe properties of other objects(entities). 

## Entities

- An entity is the opposite of a value object. It requires and **explicit identification** field to distinguish between different instances of the entity. There is only 1 color with same red, green, blue values but there might be multiple human with same name and surname.

- Entities are not **immutable** and are expected to change.

## Aggregates

- An aggregate is an **entity** however it's much more than just an entity.

- The goal of aggregate is to project the consistency of its data.

- The consistency is enforced by allowing only the aggregate's business logic to modify its state.  Its state can only be modified by executing corresponding methods of aggregate's **public interface**.

- An aggregate's public interface is responsible for **validating** input and enforcing all of the relevant **business rules.**

- All changes  to the aggregate's state should be committed by one atomic **transaction**. The need to commit changes in multiple aggregates signals a wrong transaction boundary, wrong aggregate boundaries. 

- Entities are building blocks of and aggregate. Thats why its me is aggregate: it aggregates business entities and value objects that belong to the same t**ransaction boundary**.

- Only the information that is required by the aggregate's business logic to be strongly consistent should be a part of the aggregate. All information that can be eventually consistent should reside out of the aggregate's boundary.

- Aggregate's should reference other aggregates by only ID. That means these objects don't belong to the aggregate's boundary. 

## Aggregate Root

- Since an aggregate represents a hierarchy of entities, onlye one of them shold be designated as the **aggregate's public interface.**

## Domain Events

- A domain event is a message describing a significant event that has occured in the business domain.

- Their names should be formulated in the pas tense. 

- Domain events are part of an aggregate's public interface.

## Domain Services

- A domain service is stateless object that implements business logic that either doesn't belong to any aggregate or value object, or that seems to be relevant multiple aggregates.

- Domain services make it easy to coordinate the work of multiple aggregates


