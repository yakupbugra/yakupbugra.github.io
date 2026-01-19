---
pubDatetime: 2026-01-08T15:22:00Z
title: "Software Architecture Notes – 2"
tags:
  - notes
  - architecture
description:
    "Notes on studying software architecture"
---

## What is software architecture

**Software architecture** refers to the high-level structure of a system, including its components and the relationships and interactions between them.

Whether its documented or not, good or bad, every software has an architecture.

Architecture represents the **significant decisions** that shape a system, where significance is measured by **cost of change**. Significant decisions are “architecture” and that everything else is **design**.

**Design** focuses on tactical decisions, addressing the finer details of implementation that are more flexible and can evolve as the project progresses.

**Software architecture** is about strategic decisions that balance trade-offs between competing architectural drivers while ensuring that the system can evolve in response to changing requirements.
  - The primary architectural drivers include functional requirements, quality attributes, constraints, and guiding principles.

## Why software architecture is important?

### Business & economics

- It bridges the gap between business objectives and technical decisions.
- Provides a basis for estimating effort, cost, resources, and timelines.
- Reduces long-term maintenance costs and failure risks.

### Quality & risk management

- Ensures critical quality attributes are explicitly addressed.
- Makes trade-offs visible and deliberate rather than accidental.

### Team & delivery

- Acts as a shared blueprint for how the system is built and evolves.
- Fosters collaboration and a common understanding across teams. 
- Accelerates onboarding of new developers and stakeholders.

### System evolution

- Breaks complex systems into manageable components.
- Enables reuse and faster development of similar systems
- Supports controlled growth and adaptation over time.
  
## Architectural thinking mindset

- Thinking in terms of **systems**, not isolated components
- Prioritizing **long-term impact** over short-term convenience
- Explicitly identifying and managing **trade-offs**
- Designing for **evolution and uncertainty**, not static requirements
- Aligning technical decisions with **business and organizational context**


## Architecture Characteristics (Quality Attributes)


Architecture characteristics, often referred to as **non-functional requirements (NFRs)**, describe **how well** a system must behave rather than **what** it does. They serve as key **metrics for evaluating a system’s success** and strongly influence architectural and design decisions.

Identifying the right set of characteristics is a critical architectural activity, as they must align with both **business goals** and **technical constraints**.

Not all characteristics are equally important. Typically, **3–5 key characteristics** should be prioritized in collaboration with stakeholders to reflect business drivers and constraints. Techniques such as **MoSCoW analysis** (Must/Should/Could/Won’t) or **weighted scoring** can help make priorities and trade-offs explicit.

Each architectural characteristic should be **clearly defined**, **measurable**, and supported by **Architecture Decision Records (ADRs)**. Since many characteristics inherently **conflict** with each other (e.g., performance vs. scalability, security vs. usability), architecture is fundamentally about making informed trade-offs rather than optimizing a single dimension.

### 1. Operational Characteristics

These focus on how the system functions during runtime.

- **Availability**: The percentage of time the system is operational and accessible (e.g., 99.9% uptime).
- **Performance**: Responsiveness, including latency, throughput, and capacity under load.
- **Reliability**: The ability of the system to perform its functions without failure under stated conditions. 
- **Scalability**: The capacity to handle an increasing number of users or data volume without performance loss. 
- **Elasticity**: The ability to dynamically scale resources up or down based on real-time demand. 
- **Recoverability**: The ability to restore operations after a failure. 


### 2. Structural Characteristics

These focus on the internal quality and ease of evolving the software.

- **Maintainability**: How easily the code can be modified to fix bugs or enhance features.
- **Testability:** The ease with which the system can be validated through automated tests. 
- **Deployability**: The speed and risk level of moving code changes into production environments. 
- **Extensibility**: The ability to add new functionality with minimal impact on the existing codebase. 
- **Modularity**: The degree to which components are independent and decoupled. 
- **Portability**: The ease of moving the system from one environment (e.g., AWS) to another (e.g., Azure or On-Premise).

### 3. Cross-Cutting Characteristics
These are pervasive concerns that affect both the operation and the structure of the system.

- **Security**: Protection against unauthorized access, ensuring data integrity and confidentiality. 
- **Privacy**: Protecting user data and complying with legal regulations (GDPR).
- **Observability**: The ability to monitor and understand the system's state through logs, metrics, and traces. 
- **Interoperability**: The ability of the system to communicate and exchange data with other external systems. 
- **Usability**: How intuitive and efficient it is for users to achieve their goals using the system.
- **Feasibility**: Whether the architecture can be implemented within the given budget, time, and team skill set.


### Trade-offs
In software architecture, there is no "best" solution—only a set of trade-offs. Trade-offs are unavoidable; the role of an architect is to make them explicit and intentional. Strengthening one characteristic often weakens another:

- **Security** vs. **Performance**: High encryption levels can increase latency.
- **Scalability** vs. **Simplicity**: Distributed systems are scalable but significantly more complex to maintain.
- **Flexibility** vs. **Reliability**: Highly configurable systems may be more prone to misconfiguration errors.
