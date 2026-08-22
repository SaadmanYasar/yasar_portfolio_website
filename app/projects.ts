export type Project = {
  slug: string;
  title: string;
  category: string;
  stage: string;
  summary: string;
  tags: string[];
  focus: string;
};

export const projects: Project[] = [
  {
    slug: "perception-module",
    title: "Development of a Perception Module (Visual–Inertial–LiDAR)",
    category: "Perception",
    stage: "Research project",
    summary:
      "A multi-sensor perception module that combines vision, inertial measurements, and LiDAR for robust platform awareness.",
    tags: ["Computer Vision", "IMU", "LiDAR"],
    focus: "Multi-rate sensing and perception architecture",
  },
  {
    slug: "sensor-fusion-pose-estimation",
    title: "Sensor Fusion for Pose Estimation",
    category: "Sensor fusion",
    stage: "Embedded system",
    summary:
      "Built a sensor-fusion pipeline using an ESP32 and Raspberry Pi, combining IMU, camera, and LiDAR data to improve position and angle estimation accuracy by 2.5× over IMU-only dead reckoning.",
    tags: ["ESP32", "Raspberry Pi", "Pose Estimation"],
    focus: "Accurate position and orientation estimation",
  },
  {
    slug: "predictive-pose-estimation-drl",
    title: "Predictive Pose Estimation Using Deep Reinforcement Learning",
    category: "Predictive control",
    stage: "Machine learning",
    summary:
      "Developed a DRL-based motion prediction model using historical inertial telemetry to forecast future platform positions, enabling predictive beam-steering correction and reducing optical beam misalignment.",
    tags: ["Deep RL", "MATLAB", "Beam Steering"],
    focus: "Latency-aware motion forecasting",
  },
  {
    slug: "piezoelectric-beam-divergence",
    title: "Piezoelectric Laser Beam Divergence Module",
    category: "Adaptive optics",
    stage: "Optomechanics",
    summary:
      "Designed a piezoelectric optical lens module to dynamically tune launch beam waist based on link distance, improving received optical power efficiency by up to 2.5× through adaptive beam-divergence control.",
    tags: ["Piezoelectric", "Beam Shaping", "FSO"],
    focus: "Dynamic optical beam control",
  },
  {
    slug: "magnetomotive-mems-mirror",
    title: "3×4-Layer PCB-Based Magnetomotive MEMS Mirror",
    category: "MEMS + PCB",
    stage: "Hardware prototype",
    summary:
      "Developed a mezzanine board stack of four-layer PCB-based dual-axis MEMS mirrors using magnetomotive actuation to correct optical beam misalignment as a compact, lower-cost alternative to commercial fast-steering mirrors.",
    tags: ["MEMS", "PCB Design", "Magnetomotive"],
    focus: "Compact two-axis optical steering",
  },
  {
    slug: "stm32-bare-metal-control",
    title: "Bare-Metal Embedded Engineering on STM32F4 Nucleo",
    category: "Embedded systems",
    stage: "Low-latency control",
    summary:
      "A bare-metal sensor-to-actuator loop on an STM32F4 Nucleo board designed for deterministic, low-latency optical control.",
    tags: ["STM32F4", "Bare Metal", "Real-Time Control"],
    focus: "Deterministic sensor-to-actuator timing",
  },
  {
    slug: "ldo-regulator-cadence",
    title: "Cadence Virtuoso Model of an LDO Regulator",
    category: "Analog IC",
    stage: "Circuit design",
    summary:
      "Design and simulation of a low-dropout voltage regulator in Cadence Virtuoso, with emphasis on regulation, stability, and transient response.",
    tags: ["Cadence Virtuoso", "LDO", "Analog Design"],
    focus: "Stable low-voltage power regulation",
  },
  {
    slug: "qpsk-simulink",
    title: "Simulink Model of QPSK Modulation and Demodulation",
    category: "Communications",
    stage: "System simulation",
    summary:
      "A Simulink implementation of a complete QPSK transmitter and receiver chain for studying modulation, channel effects, and signal recovery.",
    tags: ["Simulink", "QPSK", "Digital Communications"],
    focus: "End-to-end communication-system modeling",
  },
  {
    slug: "risc-v-core",
    title: "RISC-V Core Design, Verification, and Synthesis",
    category: "Digital design",
    stage: "Processor design",
    summary:
      "RTL design, functional verification, and synthesis of a RISC-V processor core as an end-to-end digital hardware project.",
    tags: ["RISC-V", "RTL", "Verification"],
    focus: "Processor architecture and implementation",
  },
  {
    slug: "pcf-lspr-sensors",
    title: "Photonic Crystal Fibre-Based LSPR Sensors",
    category: "Photonic sensing",
    stage: "Optical simulation",
    summary:
      "Investigation of photonic crystal fibre structures that use localized surface plasmon resonance for highly sensitive refractive-index sensing.",
    tags: ["PCF", "LSPR", "Optical Sensing"],
    focus: "Plasmonic refractive-index sensing",
  },
  {
    slug: "ca15-3-pcf-sensor",
    title: "Breast Cancer Diagnosis: Detecting CA15-3 Using Surface Plasmon Resonance",
    category: "Biosensing",
    stage: "Research study",
    summary:
      "A photonic crystal fibre sensor concept for detecting the CA15-3 breast-cancer biomarker through surface plasmon resonance.",
    tags: ["CA15-3", "SPR", "Photonic Crystal Fibre"],
    focus: "Label-free optical biomarker detection",
  },
  {
    slug: "led-characterization-spectrometer",
    title: "Modular LED Characterization Spectrometer",
    category: "Instrumentation",
    stage: "Optoelectronic system",
    summary:
      "A modular spectrometer that separates incident light into spectral components and verifies LED I–V and L–I characteristics through integrated optical and electrical characterization.",
    tags: ["Spectrometry", "LED", "I–V / L–I"],
    focus: "Integrated optical and electrical measurement",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
