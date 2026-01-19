---
pubDatetime: 2026-01-19T15:22:00Z
title: "Domain Driven Design Notes"
draft: false
tags:
  - notes
  - DDD
description: "There is no sence in talking about the solution before we agree on the problem, and no sense talking about the implementation steps before we agree on the solution."
---

> There is no sence in talking about the solution before we agree on the problem, and no sense talking about the implementation steps before we agree on the solution.
> Efrat Goldratt

- A **business domain** is an organisation's main area of activity.
- A **subdomain** is a **fine-grained** area of business domain.
- The subdomains have to interact with each other.
- Subdomains are sets of coheret use cases.

## Type of (Sub)Domains
### Core (Sub)Domain
- What a company does differenty from its competitors.
- Core subdomains involve inventions, smart optimizations, business know-how or other intellectual property.
- Core Subdomains are naturally **complex** to have high entery barriers for competitors to copy or imitiate.

### Generic (Sub)Domain
- Business activities that all companies are performing in same way. Ex: Authentication
- No competitive edge for the company.
  
### Supporting (Sub)Domain
- Supporting the company's business.
- No competitive advantage
- Simple, CRUD operations

| Domain Type | Competitive Advantage | Complexity | Volatility | Implementation| Problem |
| --- | ---- | ---- | ---- | ----  | --- |
| Core | Yes | Complex | Continuous innovation | In-house| Interesting |
| Supportive | No | Simple | Low |In/out house| Obvious |
| Generic | No | Known unknowns | Low | Buy/adobt | Solved |


