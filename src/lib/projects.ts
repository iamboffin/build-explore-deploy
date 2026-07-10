export type ProjectStatus = "Published" | "Patent granted" | "Patent under exam" | "Draft written" | "In development";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  year: string;
  status: ProjectStatus[];
  summary: string;
  problem: string;
  approach: string[];
  results: string[];
  specs: [string, string][];
  stack: string[];
  role: string;
  collaborators: string;
  links: { label: string; note?: string; href?: string }[];
  images?: { src: string; caption: string }[]; // placeholder — user will upload
};

export const PROJECTS: Project[] = [
  {
    slug: "high-gain-dc-dc-converters",
    title: "High-Gain DC-DC Converters",
    subtitle: "Two novel topologies, two Indian patents.",
    tag: "Power Electronics · Research",
    year: "2025 – 2026",
    status: ["Patent granted", "Patent under exam"],
    summary:
      "Under Dr. M. Prabhakar we chose research over a written assignment. From five drafted topologies we carried two through simulation, magnetics, PCB and hardware validation — both filed as Indian patents.",
    problem:
      "DC microgrids and renewable stacks need cheap, high-gain, single-stage boost converters (24–36 V input to a 400 V DC bus) that stay efficient at modest duty ratios without transformer isolation. Classic boost topologies collapse in efficiency or reliability once the required gain climbs past ~10×.",
    approach: [
      "Skimmed 60+ IEEE papers on DC microgrid converters and mapped the design space of non-isolated high-gain topologies.",
      "Drafted five novel topology candidates; ranked them by component count, voltage stress, and expected gain-vs-duty curve.",
      "Carried two forward: (A) a cascaded L-C-D single-switch topology; (B) a synchronized dual-switch topology with a cubic gain expression.",
      "Full workflow per topology — volt-second analysis, Simulink + PSIM simulation, magnetic design on ETD44 / 54 / 59 cores (hand-wound), Altium schematic + PCB, bench validation with differential and current probes.",
    ],
    results: [
      "Topology A — 30 V → 400 V at D ≈ 0.52; single controlled switch.",
      "Topology B — 24 V → 400 V at D ≈ 0.61 with 93% measured efficiency at 50 kHz.",
      "Both bench-validated on prototype PCBs with hand-wound magnetics.",
      "Two Indian patents filed and prosecuted through Khurana & Khurana.",
    ],
    specs: [
      ["Input", "24 – 36 V DC"],
      ["Output", "400 V DC bus"],
      ["Switching", "50 kHz"],
      ["Peak efficiency", "93% (Topology B)"],
      ["Cores", "ETD44 / 54 / 59 (hand-wound)"],
      ["Stack", "Simulink · PSIM · Altium"],
    ],
    stack: ["Simulink", "PSIM", "Altium Designer", "Hand-wound ETD magnetics", "Differential + current probes"],
    role: "Co-inventor · full-cycle: topology → magnetics → PCB → bench validation.",
    collaborators: "With Chada Sai Sravan and Balaji S, under Dr. M. Prabhakar.",
    links: [
      { label: "Indian Patent · 202641032862", note: "Cascaded energy-transfer path (Topology A)" },
      { label: "Indian Patent · 202641037148", note: "Synchronized dual-switch (Topology B)" },
    ],
  },
  {
    slug: "lotus",
    title: "LOTUS",
    subtitle: "A new class of low-cost dimensional measurement instrument.",
    tag: "Instrumentation · Invention",
    year: "2025",
    status: ["Patent under exam", "Draft written"],
    summary:
      "Dual VL53L0X time-of-flight sensors on a servo-driven rotating baseline, aligned by a 650 nm laser. Three geometric cases resolved via Law of Cosines depending on gear angle. The patent's real novelty is a slip-ring-free concentric-ring power/signal path — ToF triangulation is the first application on top.",
    problem:
      "Commercial contactless dimensional measurement tools cost ₹3,000 to ₹28,000, and most rely on slip rings for continuous rotation — a wear part that limits reliability. There was no sub-₹1,000 alternative that could give continuous rotation, live power, and live data all at once.",
    approach: [
      "Designed a concentric-ring PCB pair that carries power and I²C across a rotating joint without a slip ring — the patented core.",
      "Mounted two VL53L0X ToF sensors on a servo-driven arm; used a 650 nm laser to align the sensing baseline on the target.",
      "Derived three geometric cases (based on gear angle at read time) and closed the measurement with the Law of Cosines.",
      "Characterised across distance and angle envelopes on the bench.",
    ],
    results: [
      "Reliable measurement envelope: 20 – 40 cm × ±40°.",
      "Accuracy: ≈ 0.79 cm mean absolute error within envelope.",
      "Full BOM under ₹1,000 vs. ₹3k – ₹28k commercial.",
      "TRL 4 · patent filed through Khurana & Khurana.",
    ],
    specs: [
      ["Envelope", "20 – 40 cm · ± 40°"],
      ["MAE", "≈ 0.79 cm"],
      ["BOM", "< ₹1,000"],
      ["Novelty", "Slip-ring-free concentric-ring bus"],
      ["TRL", "4"],
      ["Status", "Patent under exam · IEEE draft written"],
    ],
    stack: ["VL53L0X ToF", "STM32", "Servo baseline", "Custom PCB (concentric rings)", "Law of Cosines"],
    role: "First author on the paper draft. Co-inventor on the patent.",
    collaborators: "Co-inventors: Balaji S, Chada Sai Sravan, Haseeb Ahsan N and two faculty.",
    links: [
      { label: "Indian Patent — under examination" },
      { label: "IEEE paper draft — written, not yet submitted" },
    ],
  },
  {
    slug: "rocket-avionics",
    title: "Rocket EPS + Flight Computer",
    subtitle: "First full-SMD boards. Three PCBs. Team of two.",
    tag: "Rocket Avionics · Team Ignition",
    year: "2024 – 2026",
    status: ["In development"],
    summary:
      "Sai and I designed the EPS and FC stack together — three PCBs total. Sai owned the avionics FC board; I owned the payload's combined EPS + FC board (8.5 × 8.5 cm), laid out in Altium in a single all-nighter. First team-level move to full SMD.",
    problem:
      "Team Ignition needed a reliable dual-stack power + compute architecture for the rocket: one stack for the avionics bay, one for the payload — small footprint, multi-rail, field-swappable, and buildable in a college lab with hand-soldering.",
    approach: [
      "Two independent battery/EPS/FC stacks — 3S Li-ion for avionics, 2S Li-ion for payload.",
      "Three regulated rails: 3.3 V (AMS1117), 5 V (TPS54528 buck), 7.2 V (XL4005 buck).",
      "Payload PCB (mine): combined EPS + FC on a 2-layer 8.5 × 8.5 cm board — Altium, full SMD.",
      "Avionics PCB (Sai): separate FC design with the same rail philosophy.",
      "Field-swappable buck module bolted over the 7.2 V rail after a datasheet-misread bug landed in silicon.",
    ],
    results: [
      "Three PCBs designed, populated, and bench-tested by a two-person team.",
      "Datasheet-misread bug on the 7.2 V rail traced and fixed in two days on the bench with a swap-in module.",
      "Original NRF/ESP32 co-location interference resolved via a dedicated power module and clean decoupling.",
    ],
    specs: [
      ["Payload PCB", "8.5 × 8.5 cm · 2-layer"],
      ["Rails", "3.3 V / 5 V / 7.2 V"],
      ["Packs", "3S (avionics) · 2S (payload)"],
      ["Regs", "AMS1117 · TPS54528 · XL4005"],
      ["Toolchain", "Altium (first time) · full SMD"],
      ["Team", "2 engineers · 3 boards"],
    ],
    stack: ["Altium Designer", "SMD hand-soldering", "STM32 / ESP32", "Bench PSUs + DSO"],
    role: "Owned the payload EPS + FC PCB end-to-end. Co-designed the avionics EPS.",
    collaborators: "With Chada Sai Sravan, Team Ignition — VIT Chennai.",
    links: [{ label: "Team Ignition · VIT Chennai", note: "Payload + Avionics sub-teams" }],
  },
  {
    slug: "gesture-controlled-wheelchair",
    title: "Gesture-Controlled Wheelchair",
    subtitle: "ESP-NOW, MPU6050, and a Kalman filter that behaves.",
    tag: "Embedded · IEEE Published",
    year: "2024",
    status: ["Published"],
    summary:
      "Curiosity project on ESP-NOW turned into an IEEE paper. Two ESP32s, one MPU6050 on the user (hand tilt or head pose), L298N to the motors, HC-SR04 for obstacle backoff. Kalman filter to keep the IMU honest.",
    problem:
      "Camera-based assistive wheelchairs cost $200+ and depend on a working camera, lighting, and a lot of compute. We wanted a sub-$40 rig with sub-100 ms latency that a user could steer with a hand tilt or a head nod.",
    approach: [
      "Two ESP32s over ESP-NOW — one on the user (transmitter, MPU6050), one on the chair (receiver, L298N motor driver).",
      "Kalman-filtered pitch/roll/yaw from the MPU6050 to reject IMU drift and jitter.",
      "HC-SR04 ultrasonic in front of the chair for obstacle backoff.",
      "Three control modes — hand-tilt, head pitch/roll, and yaw-only — selectable at startup.",
    ],
    results: [
      "End-to-end control latency: 50 – 100 ms.",
      "Full BOM under $40 vs. $200+ camera-based alternatives.",
      "Published at IEEE ICICNIS 2024 (DOI 10.1109/ICICNIS64247.2024.10823349).",
    ],
    specs: [
      ["Latency", "50 – 100 ms"],
      ["BOM", "< $40"],
      ["Modes", "Hand · head · yaw-only"],
      ["Filter", "Kalman on pitch/roll/yaw"],
      ["Protocol", "ESP-NOW"],
    ],
    stack: ["ESP32 × 2", "MPU6050", "ESP-NOW", "L298N", "HC-SR04", "Kalman filter"],
    role: "First author on the updated paper (post-publication update). Firmware + integration.",
    collaborators: "With Jayasuriya S, Balaji S, under Prof. Sriramalakshmi P.",
    links: [
      {
        label: "IEEE ICICNIS 2024 · 10.1109/ICICNIS64247.2024.10823349",
        note: "Published paper",
        href: "https://doi.org/10.1109/ICICNIS64247.2024.10823349",
      },
    ],
  },
  {
    slug: "pocket-alt",
    title: "Pocket Alt",
    subtitle: "A pocket, toss-and-play altimeter for model rocketry.",
    tag: "Embedded System Design",
    year: "2026",
    status: ["Draft written", "In development"],
    summary:
      "STM32F401 + BMP280 + SSD1306, with on-chip Flash logging and a single-button 5-state FSM (calibrate → track → apogee → save → clear). Benchmarked against StratoLoggerCF, AltimeterTwo and Raven4 — none of which ship easily to India.",
    problem:
      "The pocket altimeters model rocketry hobbyists rely on (StratoLoggerCF, AltimeterTwo, Raven4) don't ship easily to India and cost several thousand rupees. There was no sub-₹1,000 alternative with usable accuracy, an on-device display, and Flash logging.",
    approach: [
      "STM32F401 as the MCU, BMP280 for pressure/altitude, SSD1306 OLED for on-device UI.",
      "On-chip Flash for flight logs — no SD card, no extra parts.",
      "Single-button 5-state FSM: calibrate → track → apogee → save → clear.",
      "Benchmarked against three commercial altimeters in an elevator test across a 5-floor building.",
    ],
    results: [
      "10 Hz sample rate · < 100 ms apogee detection latency.",
      "Mean absolute error of 0.176 m across the 5-floor elevator test.",
      "~ 5.5 hr battery life on a small LiPo.",
      "BOM under ₹800.",
    ],
    specs: [
      ["Sample rate", "10 Hz"],
      ["Apogee latency", "< 100 ms"],
      ["MAE", "0.176 m (5-floor elevator)"],
      ["Battery", "~ 5.5 hr"],
      ["BOM", "< ₹800"],
      ["Status", "Paper written · not yet submitted"],
    ],
    stack: ["STM32F401", "BMP280", "SSD1306 OLED", "On-chip Flash logging"],
    role: "Firmware, hardware, characterisation.",
    collaborators: "With Chada Sai Sravan and Aryaman Agrawal.",
    links: [{ label: "IEEE paper draft — written, not yet submitted" }],
  },
];

export const PUBLICATIONS = [
  {
    kind: "IEEE Paper",
    title: "Gesture-Controlled Wheelchair using ESP-NOW",
    venue: "IEEE ICICNIS 2024",
    status: "Published",
    detail: "DOI 10.1109/ICICNIS64247.2024.10823349 · first author on the updated paper",
    href: "https://doi.org/10.1109/ICICNIS64247.2024.10823349",
    projectSlug: "gesture-controlled-wheelchair",
  },
  {
    kind: "IEEE Paper",
    title: "LOTUS — dual-ToF dimensional measurement",
    venue: "Draft written",
    status: "Unpublished",
    detail: "First author. Paper written, not yet submitted.",
    projectSlug: "lotus",
  },
  {
    kind: "IEEE Paper",
    title: "Pocket Alt — low-cost model-rocketry altimeter",
    venue: "Draft written",
    status: "Unpublished",
    detail: "Written, not yet submitted.",
    projectSlug: "pocket-alt",
  },
  {
    kind: "Indian Patent",
    title: "High-Gain DC-DC Converter — Cascaded L-C-D (Topology A)",
    venue: "Application 202641032862",
    status: "Filed",
    detail: "Filed via Khurana & Khurana. Co-inventor.",
    projectSlug: "high-gain-dc-dc-converters",
  },
  {
    kind: "Indian Patent",
    title: "High-Gain DC-DC Converter — Synchronized Dual-Switch (Topology B)",
    venue: "Application 202641037148",
    status: "Filed",
    detail: "Filed via Khurana & Khurana. Co-inventor.",
    projectSlug: "high-gain-dc-dc-converters",
  },
  {
    kind: "Indian Patent",
    title: "LOTUS — slip-ring-free concentric-ring bus for rotating instruments",
    venue: "Application under examination",
    status: "Under examination",
    detail: "Filed via Khurana & Khurana. Co-inventor.",
    projectSlug: "lotus",
  },
] as const;
