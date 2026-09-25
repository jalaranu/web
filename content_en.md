# Jalaranu: Website structure and content draft

Language: English  
Version: 1.0 - draft for editing and implementation  
Visual identity: **Jalaranu Vivid, serif wordmark**  
Companion document: `content_id.md`

> **EDITORIAL NOTE - not website copy.** This draft uses the most conservative position supported by the conversation: Jalaranu is a project developing an underwater lake datacenter concept. Prototype status, location, legal entity, operating facilities, test results, funding, permits, customers, certifications, and partnerships have not been confirmed. Do not present them as achievements. Resolve every `[CONFIRM: ...]` marker or remove the affected section before publication. Paragraphs labelled **Public copy** are candidate website text; structural tables, visual direction, and implementation notes are not public content.

## 01. Purpose and editorial principles

**Primary objective:** generate relevant partnership conversations for Jalaranu's development and evaluation.

**Audiences:** investors; government and defence institutions; technology, infrastructure, and operations partners; universities and research organisations.

**Brand position:** technology with an Indonesian identity and a proposition that can be examined. Cultural character belongs in the identity; the case for investment and adoption rests on technical, economic, and environmental evidence.

**Voice:** clear, composed, confident, collaborative. Use short sentences and technical language when it helps a reader make a decision. Storytelling introduces the context; evidence and development milestones establish feasibility.

**Status language:** distinguish concepts, planned tests, simulations, prototypes, measured results, and operational services. Do not turn a target into a result.

**Claims to avoid without substantiation:** safest; sabotage-proof; zero environmental impact; free cooling; zero emissions; quantified efficiency gains; military-grade; Tier III/IV certified; guaranteed data sovereignty; first in Indonesia/the world.

## 02. Initial site structure

Five main pages, four navigation items, one primary action. The logo links to Home. No megamenu or portal at this stage.

| ID | Page / navigation | URL | Purpose |
|---|---|---|---|
| H | Home, through the logo | `/en/` | Understand the project, its status, and why to contact the team. |
| T | Technology | `/en/technology/` | Understand the concept and engineering questions to be resolved. |
| V | Validation | `/en/validation/` | Assess the approach to evidence and any available findings. |
| P | Partnerships | `/en/partnerships/` | Choose a collaboration route and submit an initial enquiry. |
| A | About | `/en/about/` | Understand the identity, team, and project accountability. |
| U | Privacy, in the footer | `/en/privacy/` | Explain contact-data handling once actual practices are established. |

**Navigation:** Technology · Validation · Partnerships · About  
**Primary button:** Discuss a Partnership → `/en/partnerships/#contact`  
**Language switch:** ID / EN, linking to the equivalent page.  
**Additional footer links:** Privacy · Contact.

**Initial scope:** do not display Products, Pricing, Customers, Careers, News, or Download White Paper before the underlying content and processes exist. Add a publication centre when there are results that can be updated consistently. Develop a portal only in response to a demonstrated user need.

## 03. Visual identity and asset use

Selected package: `jalaranu-vivid-brand-pack.zip`. Use the serif version, not the DIN package.

| Use | Asset inside `jalaranu-vivid/` |
|---|---|
| Horizontal logo on a light background | `jalaranu-vivid-horizontal-light.svg` |
| Horizontal logo on a dark background | `jalaranu-vivid-horizontal-dark.svg` |
| JALA: symbol: RANU on a light background | `jalaranu-vivid-split-light.svg` |
| JALA: symbol: RANU on a dark background | `jalaranu-vivid-split-dark.svg` |
| Vertical arrangement | `jalaranu-vivid-logo-light.svg` / `jalaranu-vivid-logo-dark.svg` |
| Symbol alone | `jalaranu-vivid-mark.svg` |

Each logo also has a transparent PNG with the same base name. Horizontal and split PNGs are 4000 × 960 px; vertical and symbol PNGs are 2200 px wide.

**Direction:** use the horizontal arrangement as the primary lockup. Reserve the split arrangement for covers, presentation openers, or sufficiently large website areas. Keep Jalaranu as one word in body copy, metadata, links, and accessible labels.

The full symbol contains ornamental detail. Check its legibility at the actual display size; do not force it into a 16–32 px favicon. In narrow mobile headers, use the brand name as text if the symbol cannot be displayed clearly. A simplified favicon is a separate design task.

**Palette:** red `#EF4136`, grey `#77869B`, blue accent `#008FBF`, dark text `#202C3C`, light text `#F1F5FA`, white background `#FFFFFF`, dark background `#101820`. Use red and blue as accents; use readable neutral colours for long text. Check contrast in each actual use, including buttons and status indicators.

**Website typography:** retain the outlined serif wordmark. Use a clean, readable sans-serif for paragraphs and interface text; the wordmark does not need to determine all typography.

**Primary visual direction:** a system cross-section matters more than decorative animation. Label every render “Concept illustration”. Do not use institutional, investor, customer, or certification logos as trust decoration without a factual basis and permission to use them.

## 04. Home: `/en/`

### H01: Opening

**Public copy**

Eyebrow: Underwater lake datacenter concept

# Computing infrastructure beneath the lake. Supporting Indonesia's digital resilience.

Jalaranu is developing a modular underwater lake datacenter concept. The focus is to evaluate thermal efficiency, operational reliability, and the feasibility of deployment in Indonesia.

We welcome collaboration with investors, institutions, and technology partners to establish a measurable foundation for development.

**Primary CTA:** Discuss a Partnership → `/en/partnerships/#contact`  
**Secondary CTA:** Explore the Technology → `/en/technology/`

**Editorial note:** add one status line after the actual stage is confirmed: `[CONFIRM: development stage and update date]`. Do not display capacity figures, launch countdowns, or an “operational” badge without supporting facts.

**Visual:** one cross-section showing the lake surface, submerged module, and connection to shore-based facilities. Caption: “Concept illustration. Final configuration is subject to study and engineering findings.”

### H02: Development rationale

**Public copy**

## Why consider a location beneath a lake?

Underwater placement offers a different approach to heat management, physical space, and infrastructure access. Its potential benefits need to be assessed alongside the implications for deployment, maintenance, connectivity, and recovery.

The central question is: under what conditions would this approach be more feasible than a land-based datacenter using water-based cooling?

Jalaranu places that comparison at the centre of its evaluation.

**Three areas of focus:**

- **Thermal performance.** Assessing heat transfer and energy demand under defined site conditions and workloads.
- **Operational reliability.** Testing how the system can be monitored, maintained, and recovered when disruptions occur.
- **Overall feasibility.** Comparing whole-life costs and responsibilities towards the environment.

**CTA:** See the Validation Approach → `/en/validation/`

### H03: System overview

**Public copy**

## One system, from shore to submerged module.

The Jalaranu concept connects shore-based support facilities with a computing module beneath the water. Planning covers power, connectivity, heat management, monitoring, and how the module is deployed and retrieved.

- **Shore facilities:** interfaces for power, networking, and operational management.
- **Shore-to-module connections:** power and communications routes to be designed around service-continuity requirements.
- **Underwater module:** a computing enclosure and supporting systems to be evaluated through engineering and testing.
- **Monitoring and recovery:** observation of system conditions, incident response, and module retrieval.

**CTA:** Understand the System Concept → `/en/technology/#system`

### H04: Evidence-led development

**Public copy**

## Progress assessed through evidence.

Each development stage needs to answer specific questions: does performance meet the requirement, how does the system behave when it fails, what does it cost to operate, and how are environmental effects assessed?

Test plans, measured results, and their limitations provide the basis for decisions about further development.

**CTA:** Explore Validation → `/en/validation/`

**Editorial note:** once evidence is available, display up to three cards with a test name, date, finding, method, limitation, and document link. If it is not available, use the copy above without achievement cards or simulated figures presented as field results.

### H05: Partnership routes

**Public copy**

## Help shape Jalaranu's next stage.

- **Investors:** explore milestone-based funding and business-model evaluation.
- **Government and defence:** discuss use requirements, evaluation criteria, and potential pilot development.
- **Industry partners:** explore contributions to engineering, energy, networks, manufacturing, and operations.
- **Research partners:** develop test methods and technical, economic, and environmental studies.

**CTA:** Find Your Partnership Route → `/en/partnerships/`

### H06: Closing

**Public copy**

## What would need to be demonstrated for this concept to be relevant to your organisation?

Start with your requirements, the scope of evaluation, and the contribution we could develop together.

**CTA:** Discuss a Partnership → `/en/partnerships/#contact`

## 05. Technology: `/en/technology/`

### T01: Opening

**Public copy**

# Engineering starts with the right questions.

Jalaranu explores the underwater lake datacenter as an integrated system. Module placement needs to be evaluated together with power, networking, heat management, maintenance, and recovery.

### T02: Concept architecture `{#system}`

**Public copy**

## From shore interfaces to the underwater environment.

The concept architecture includes four elements: shore-based support facilities, power and communications connections, the computing module, and monitoring and operational management. Their relationships determine how the overall facility can function and recover.

Early visualisations use a truncated square pyramid. This is a design exploration; final geometry, materials, and specifications will follow engineering and test findings.

**Visual:** a block diagram and cross-section showing logical connections, without coordinates or facility-security details.

### T03: Engineering questions

**Public copy**

## Five areas to evaluate.

1. **Heat management:** water conditions, heat transfer, computing loads, and the energy required by supporting systems.
2. **Module integrity:** the ability of structures, joints, and system interfaces to withstand the defined operating conditions.
3. **Power and connectivity:** service needs, redundancy options, behaviour during connection failures, and recovery procedures.
4. **Maintenance:** what can be monitored remotely, when intervention is required, and how the module can be handled or retrieved.
5. **Security and control:** administrative access, event monitoring, key management, operator responsibilities, and protection of physical and digital interfaces.

### T04: Comparing alternatives

**Public copy**

## Advantages need to be assessed against relevant alternatives.

Evaluation should compare the underwater lake concept with land-based solutions using equivalent service requirements, workloads, and assumptions. Relevant comparisons include land-based facilities with conventional cooling and water-based cooling, where applicable to the site under study.

Assessment covers energy, capital expenditure, operating costs, maintenance, connectivity, recovery, environmental effects, and end of life. Potential savings in one component do not in themselves demonstrate a lower total cost.

### T05: Use cases under exploration

**Public copy**

The concept can be evaluated for dedicated computing, storage, or particular infrastructure requirements defined by an organisation. The suitability of each use case must be established through requirements assessment and test evidence.

A use case mentioned here is not a statement that the service is already available or approved to handle sensitive data.

**CTA:** Discuss Technical Requirements → `/en/partnerships/#contact`

## 06. Validation: `/en/validation/`

### V01: Opening

**Public copy**

# Evidence provides the basis for the next step.

The feasibility of an underwater lake datacenter needs to be assessed technically, economically, and environmentally. Jalaranu's validation approach focuses on testable questions, explainable methods, and findings presented alongside their limitations.

### V02: Development status

**Editorial note - confirmation required:** display the actual stage, update date, and supporting documents where available. Do not automatically mark early stages as complete. If status has not been verified, do not publish a timeline of achievements.

**Public-copy template after confirmation:**

- Current stage: `[CONFIRM: actual development stage]`.
- Current focus: `[CONFIRM: work currently in progress]`.
- Last updated: `[CONFIRM: date]`.
- Evidence available to share: `[CONFIRM: documents or findings approved for publication]`.

### V03: Evaluation plan

**Public copy**

## Questions that shape the test programme.

| Area | Evaluation question |
|---|---|
| Thermal performance and energy | How does the system perform across defined workloads and environmental conditions? |
| Structure and integrity | Do the module and its interfaces meet the specified operating and test conditions? |
| Reliability and recovery | How does the system respond to disruptions, recover, and undergo maintenance? |
| Whole-life cost | How do installation, operation, intervention, retrieval, and end-of-life costs compare with alternatives? |
| Environment | How is the baseline documented, change monitored, and the evidence evaluated? |
| Fitness for use | For which requirements and service levels do test results indicate suitability? |

Success criteria, methods, and responsibilities need to be defined before testing begins.

### V04: A framework towards a pilot

**Public copy**

## Staged development, with decisions at each stage.

1. **Requirements definition:** establish objectives, relevant alternatives, and success criteria.
2. **Studies and preliminary engineering:** assess candidate sites for further study, risks, system design, and cost assumptions.
3. **Component and integration testing:** test the functions that determine system safety and performance.
4. **A limited pilot:** measure performance within an agreed scope, supported by monitoring and recovery plans.
5. **Evaluation for the next stage:** review findings, limitations, and the feasibility of further development.

This sequence is a development framework, not a list of stages claimed to be complete.

### V05: Environment and responsibility

**Public copy**

## A lake is an environment to understand.

Site studies need to consider water conditions, uses of the area, the needs of affected communities, and applicable requirements. The evaluation plan should cover baseline conditions, changes to monitor during testing, and the handling of facilities at end of life.

Study findings inform site and design decisions, including a decision not to proceed with an option if it is unsuitable.

### V06: Findings and documents

**Editorial note:** enable this section only when documents exist. Each entry needs a title, evidence type, date, version, responsible author or organisation, method, findings, limitations, and public/restricted access status. Identify simulations as simulations; do not present a partner report as a certification. Do not display download buttons without files.

**CTA that can always be used:** Discuss the Validation Programme → `/en/partnerships/#contact`

## 07. Partnerships: `/en/partnerships/`

### P01: Opening

**Public copy**

# Start with the requirement. Agree on what needs to be demonstrated.

Jalaranu welcomes conversations with organisations interested in evaluating, developing, or supporting the underwater lake datacenter concept. Collaboration begins with clear objectives, realistic scope, and outcomes that can be assessed.

### P02: Investors `{#investors}`

**Public copy**

## Funding linked to measurable progress.

We invite discussion of market needs, the business model, funding stages, and the evidence required at each stage. The initial focus is to understand how capital can reduce development uncertainty.

Topics include prospective users, available alternatives, cost estimates and their assumptions, capital requirements, and milestones for subsequent investment decisions.

**CTA:** Discuss an Investment Opportunity → `#contact` - preselect form category: Investor.

**Editorial note:** before a formal investment approach, prepare a revenue-model summary, target-customer profile, basis for market estimates, use of funds, a cap table where relevant, and cost scenarios. Do not invent traction, valuation, returns, or investment commitments. This button invites a discussion; it does not state a public investment offering.

### P03: Government and defence institutions `{#institutions}`

**Public copy**

## Evaluate strategic requirements through focused collaboration.

Discussion can begin with infrastructure needs, service continuity, operational control, data governance, and institutional evaluation criteria. The suitability of the Jalaranu concept is determined through requirements assessment and relevant testing.

Potential collaboration may include feasibility studies, requirements definition, and the development of a limited pilot. Access requirements, information handling, and each party's responsibilities are agreed according to the scope of collaboration.

**CTA:** Explore Institutional Collaboration → `#contact` - preselect form category: Government / defence institution.

**Editorial note:** do not imply an appointment, endorsement, contract, security approval, or special procurement route. Display institutional names and logos only when the relationship is real and permission to publish is clear.

### P04: Industry partners `{#industry}`

**Public copy**

## Connecting engineering, infrastructure, and operational capabilities.

We welcome discussions with prospective partners in energy, connectivity, structures and manufacturing, computing, heat management, sensors, and field operations.

Contributions can be defined around development requirements, interface boundaries, integration responsibilities, and the test outcomes the parties aim to achieve together.

**CTA:** Discuss a Technology Contribution → `#contact` - preselect form category: Industry / technology partner.

### P05: Research partners `{#research}`

**Public copy**

## Developing methods and evidence that can be reviewed.

Universities and research organisations can explore thermal, structural, reliability, economic, and environmental studies. Research scope, data use, publication, and rights to outcomes need to be agreed from the outset.

**CTA:** Explore Research Collaboration → `#contact` - preselect form category: Research partner.

### P06: Initial engagement

**Public copy**

## From an initial conversation to a shared scope of work.

1. Describe your organisation's requirements and objectives.
2. Discuss fit and the initial information that can be shared.
3. Define scope, contributions, and evaluation criteria.
4. Determine the next step based on both parties' readiness.

### P07: Contact form `{#contact}`

**Public copy**

## Tell us what your organisation needs.

Provide brief context and the type of collaboration you would like to explore. Do not include confidential information, credentials, sensitive operational data, or restricted documents in this form.

| Element | Label / text |
|---|---|
| Name, required | Full name |
| Organisation, required | Organisation name |
| Email, required | Contact email |
| Partnership type, required | Investor / Government or defence institution / Industry or technology partner / Research partner / Other |
| Message, required | Requirements and collaboration objectives |
| Message placeholder | Describe your requirements, a contribution you could offer, or your initial questions. |
| Data-handling link | Read how your contact information is handled in our Privacy Notice. |
| Submit button | Send Discussion Request |

**Helper text:** Sensitive technical details are not needed at this stage.

**Success, only after successful delivery:** Thank you. Your discussion request has been received. The Jalaranu team will review the information you submitted.

**Failure:** Your request has not been sent. Please try again or contact `[CONFIRM: public contact email]`.

**Field validation:** Please complete this field. / Enter a valid email address.

**Implementation note:** no file uploads or mandatory phone-number field at launch. Do not promise a response time before the process exists. Do not show success merely because the button was clicked. Do not activate the form before its responsible owner, processing purpose, access, retention, and privacy notice have been established. If these are not ready, use a confirmed contact email as the interim route. The Privacy Notice must be reviewed against actual practices; this draft is not a final compliance document.

## 08. About: `/en/about/`

### A01: Opening

**Public copy**

# Rooted in Indonesian identity. Developed through evidence.

Jalaranu is an initiative developing an underwater lake datacenter concept. We aim to bring engineering, infrastructure requirements, and an understanding of the environment into a measurable development process.

### A02: The name and symbol

**Public copy**

## Knowledge, safeguarded.

The name Jalaranu combines “jala”, understood as water in the naming of this brand, and “ranu”, lake. Its visual identity draws inspiration from Javanese heritage.

A guardian goddess supports a datacenter beneath flowing water. The symbol expresses a responsibility to safeguard knowledge and the infrastructure that supports it.

That meaning carries into the way the project is developed: clear questions, focused testing, and honest communication about findings and limitations.

**Editorial note:** the name story follows the founder's explanation. It is not a claim of independently verified etymology or a depiction of a specific historical deity.

### A03: Development principles

**Public copy**

- **Evidence before scale.** Development decisions follow evaluation findings.
- **Responsibility across the facility's life.** Planning covers installation, operation, recovery, and end of life.
- **Collaboration with clear roles.** Contributions, interfaces, and responsibilities are agreed from the outset.
- **Proportionate openness.** Public information explains the project rationale; detailed discussion follows need and access authority.

### A04: Team and organisation

**Editorial template - do not publish empty cards:**

- Name: `[CONFIRM: full name]`.
- Actual role: `[CONFIRM: position or responsibility]`.
- Relevant experience: `[CONFIRM: verifiable summary]`.
- Professional profile: `[CONFIRM: link approved for publication]`.
- Legal entity or project owner: `[CONFIRM: name and status]`.
- Public contact: `[CONFIRM: monitored email address]`.

Do not present an individual's experience at another organisation as that organisation's official endorsement. List partners or advisers only after their status and permission to be named are clear.

**CTA:** Explore Collaboration Opportunities → `/en/partnerships/`

## 09. Public FAQ

Place on Validation or near the bottom of Technology; no additional navigation item is needed.

### F01: Is Jalaranu commercially operational?

This website introduces the Jalaranu concept and development opportunities. Commercial service availability will be communicated separately once facility and service readiness have been confirmed.

### F02: Why use a lake?

A lake is the deployment context being explored. Suitability needs to be assessed against water conditions, access, energy, networking, environmental factors, and intended use. Selecting a lake does not in itself demonstrate an advantage over another location or design.

### F03: Is the cooling free or energy-free?

The potential use of the water environment must be assessed alongside heat-transfer systems and the energy requirements of the whole facility. Jalaranu does not claim specific savings without measured results and a clearly defined comparison.

### F04: What happens if the module needs repair?

Monitoring, incident handling, retrieval, and component replacement are part of design evaluation. Detailed procedures will follow the tested design and agreed service requirements.

### F05: Can it support sensitive data or defence requirements?

Suitability needs to be assessed against data classification, system architecture, access controls, governance, and the requirements of the relevant institution. This website does not claim approval or readiness to handle information at a particular classification level.

### F06: How are effects on the lake assessed?

The study approach covers baseline conditions, changes to monitor, and evaluation during testing and at end of life. Its scope must be adapted to the location and planned activities.

### F07: How can I obtain more information?

Use the partnership form to introduce your organisation and the purpose of the discussion. Information that can be shared will depend on the needs of the discussion and document availability.

## 10. Footer and metadata

**Public footer copy:**

Jalaranu - developing an underwater lake datacenter concept to support Indonesia's digital resilience.

Technology · Validation · Partnerships · About · Privacy · Contact

**Logo label:** Jalaranu.  
**Main illustration alt text:** Jalaranu concept illustration: a datacenter module beneath a lake surface, connected to shore-based support facilities.  
**Symbol alt text when informative:** The Jalaranu symbol shows a guardian goddess supporting a truncated-pyramid datacenter beneath flowing water.  
**Note:** when the logo link is already labelled Jalaranu, avoid repeated screen-reader announcements. Copyright and operator identity use `[CONFIRM: appropriate entity and year]`.

| Page | SEO title | Meta description |
|---|---|---|
| Home | Jalaranu: Underwater Lake Datacenter Concept | Explore Jalaranu's underwater lake datacenter concept, validation approach, and partnership opportunities for computing infrastructure in Indonesia. |
| Technology | Underwater Lake Datacenter Technology: Jalaranu | Explore Jalaranu's system concept, from shore facilities and computing modules to heat management, connectivity, and recovery. |
| Validation | Technical, Economic and Environmental Validation: Jalaranu | Learn about Jalaranu's test questions and staged approach to evaluating the feasibility of an underwater lake datacenter. |
| Partnerships | Datacenter Development Partnerships: Jalaranu | Explore collaboration with Jalaranu as an investor, government or defence institution, industry partner, or research organisation. |
| About | About Jalaranu: Identity and Development | Discover Jalaranu's identity, development principles, and the people responsible for its underwater lake datacenter project. |

## 11. Implementation notes and pre-publication review

This section is for the content, design, and development team only.

- Use one H1 per page. Draft headings indicate content hierarchy; H01, T01, and similar labels are internal IDs, not public titles.
- Implement the `system`, `investors`, `institutions`, `industry`, `research`, and `contact` anchors explicitly; the `{#...}` notation in this document is an instruction, not visible copy.
- Preserve page and context when switching languages. Use paired ID/EN URLs and appropriate language metadata.
- Do not use autoplay video, first-visit contact pop-ups, animated statistics without evidence, or false operational-status indicators.
- Publish diagrams that explain the system without including facility coordinates or security detail unnecessary for public discussion.
- The Privacy page supports form launch and is not a ready-to-use legal draft. It must reflect the operator, data-use purposes, service providers, retention, user-request channel, and actual practices.
- Assess website performance through relevant discussion requests and follow-up meetings. If analytics is used, establish appropriate data handling and do not send form-message contents to analytics.
- Every figure needs a source, date, scope, unit, and target/simulation/measurement status. Keep test context near the result.
- Pre-publication priorities: confirm project stage; accountable owner; active email; team members who may be named; document status; concept-labelled visuals; form workflow; and Privacy Notice.

### Optional editorial references

These references may help the team develop Validation material. They are not evidence of Jalaranu's performance or a statement of partnership. Recheck them before quoting in a publication.

- Microsoft Research, Project Natick: https://www.microsoft.com/en-us/research/project/natick/ - an example of communicating underwater research and findings within a specific experiment. Do not transfer its results to a lake or Jalaranu without testing.
- Uptime Institute, Tier Certification: https://uptimeinstitute.com/tier-certification - a reference for distinguishing design, facility, and operational status when discussing certification. It does not imply Jalaranu is certified.
