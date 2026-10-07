// All visible content lives here. Edit this file to update the site.
// Source of truth: your résumé. Nothing private (phone, email, street address) belongs in this file.
export const site = {
  domain: 'apatel.ca',
  url: 'https://apatel.ca',
  name: 'Akshat Raghvendra Patel',
  title: 'Network & Infrastructure Specialist', // résumé versions differ ("Specialist" / "Technician"): confirm
  location: 'Sudbury, Ontario, Canada',
  tagline: 'Networks and servers that stay up, stay documented, and stay secure.',
  intro:
    'I design, secure, and maintain network and server infrastructure for industrial (OT), mining, and enterprise sites: routing and switching, identity, monitoring, and recovery.',
  description:
    'Akshat Raghvendra Patel is a Network & Infrastructure Specialist in Sudbury, Ontario with 4+ years across enterprise and industrial (OT) networking, Active Directory and Microsoft 365, Wazuh SIEM, and Python/PowerShell automation.',
  // Add real URLs only. Leave null to hide the button.
  linkedin: null,
  github: null,
  resumeUrl: null, // e.g. '/Akshat-Patel-Resume.pdf' once you approve a redacted PDF
};

export const snapshot = [
  'Since March 2022 I have worked at ECM Automation Networks in Sudbury, designing and running network and server infrastructure for ruggedized industrial (OT) and mining sites alongside enterprise environments. The priority is always the same: keep mission-critical systems available.',
  'My day-to-day covers routing and switching (Cisco, UniFi, pfSense), identity and access (Active Directory, Entra ID, Group Policy, Microsoft 365), monitoring (Zabbix, SolarWinds), security event correlation (Wazuh SIEM), endpoint management, and disaster recovery.',
  'Since January 2025 I also teach CCNA-level switching, routing, and wireless at Cambrian College, which keeps my fundamentals sharp. I am building toward network automation, deeper enterprise routing (CCNP ENCOR), and more cloud administration.',
];

export const capabilities = [
  { layer: 'Network', title: 'Enterprise networking', items: ['Cisco IOS', 'pfSense', 'UniFi', 'Layer 2/3 routing & switching', 'VLANs', 'DNS', 'DHCP', 'Wireshark', '10Gb topologies'] },
  { layer: 'Network', title: 'Industrial (OT) networking', items: ['Ruggedized industrial sites', 'Mining sites', 'High-availability design'] },
  { layer: 'Identity', title: 'Identity & Microsoft 365', items: ['Active Directory', 'Entra ID', 'Group Policy', 'Microsoft 365', 'MFA enforcement'] },
  { layer: 'Security', title: 'Security & remote access', items: ['Wazuh SIEM', 'IDS/IPS', 'ACLs', 'Network segmentation', 'Vulnerability assessments', 'WireGuard VPN'] },
  { layer: 'Platform', title: 'Systems & virtualization', items: ['Windows Server Datacenter', 'VMware', 'Proxmox', 'TrueNAS', 'Failover clustering'] },
  { layer: 'Platform', title: 'Backup & disaster recovery', items: ['Automated backup', 'Configuration backup protocols', 'DR frameworks'] },
  { layer: 'Operations', title: 'Monitoring & endpoint management', items: ['Zabbix', 'SolarWinds', 'NinjaRMM', 'MDM', 'ManageEngine Service Desk Plus'] },
  { layer: 'Operations', title: 'Linux & automation', items: ['Python', 'PowerShell', 'Bash / shell', 'cron', 'Docker', 'Ubuntu'] },
];

// Only what the résumé states. Add a real `link` later to turn "write-up to come" into a case-study link.
export const projects = [
  {
    title: 'Enterprise 10Gb failover cluster',
    objective: 'Give a failover cluster fast storage access with traffic kept isolated between hosts and storage.',
    role: 'Designed the physical and logical 10Gb network topology.',
    outcome: 'Optimized speeds and traffic isolation between Windows Server Datacenter hosts and TrueNAS storage arrays.',
    stack: ['10Gb networking', 'Windows Server Datacenter', 'TrueNAS', 'Failover clustering'],
    link: null,
  },
  {
    title: 'Network hardening with segmentation',
    objective: 'Limit lateral movement and strengthen overall security posture.',
    role: 'Redesigned the network architecture.',
    outcome: 'VLAN segmentation and dynamic ACLs restrict lateral movement.',
    stack: ['VLANs', 'Dynamic ACLs', 'Network segmentation'],
    link: null,
  },
  {
    title: 'Network automation & auditing scripts',
    objective: 'Streamline routine network administration work.',
    role: 'Developed the scripts in Python and PowerShell.',
    outcome: 'Scripts parse MAC address tables and cross-reference ARP records automatically.',
    stack: ['Python', 'PowerShell', 'MAC tables', 'ARP'],
    link: null,
  },
  {
    title: 'WireGuard VPN with scheduled access',
    objective: 'Run a VPN server whose interface is active only during business hours.',
    role: 'Configured the server on Ubuntu and wrote the shell scripts and cron jobs.',
    outcome: 'Interface activity is restricted to business hours by scheduled scripts.',
    stack: ['WireGuard', 'Ubuntu', 'Bash', 'cron'],
    link: null,
  },
];

export const roles = [
  {
    title: 'Network & Infrastructure Specialist', org: 'ECM Automation Networks', place: 'Sudbury, ON', dates: 'March 2022 – Present',
    lead: [
      'Design and deploy highly available network and server infrastructure at ruggedized industrial (OT) and mining sites, aimed at minimizing downtime for mission-critical systems.',
      'Administer and harden routing and switching with Cisco, UniFi, and pfSense, tuning traffic flow and enforcing edge security policy across multiple sites.',
      'Manage identity and access with Active Directory, Entra ID, and Group Policy across Microsoft 365 for distributed teams.',
    ],
    more: [
      'Monitor network and server health with Zabbix and SolarWinds, and correlate security events in Wazuh SIEM to speed threat detection and incident response.',
      'Administer endpoints with NinjaRMM and MDM, and resolve infrastructure and network escalations in ManageEngine Service Desk Plus while maintaining SLA targets.',
      'Build and maintain disaster recovery frameworks with automated backup and configuration protocols to remove single points of failure.',
    ],
    tech: ['Cisco', 'UniFi', 'pfSense', 'Active Directory', 'Entra ID', 'Microsoft 365', 'Zabbix', 'SolarWinds', 'Wazuh', 'NinjaRMM'],
  },
  {
    title: 'Part-Time Professor, IT & Networking', org: 'Cambrian College', place: 'Sudbury, ON', dates: 'January 2025 – Present',
    lead: [
      'Teach “Switching, Routing, and Wireless Essentials” (CCNA-level routing, switching, and wireless) in person and online.',
      'Design and evaluate Moodle exams and infrastructure labs built from real-world enterprise networking and server administration scenarios.',
    ],
    more: [],
    tech: ['Switching', 'Routing', 'Wireless', 'Moodle'],
  },
];

export const certs = [
  { name: 'Cisco Certified Network Associate (CCNA)', status: 'done' },
  { name: 'ISC2 Certified in Cybersecurity (CC)', status: 'done' },
  { name: 'CompTIA A+', status: 'done' },
  { name: 'Microsoft Azure Fundamentals (AZ-900)', status: 'done' },
  { name: 'Cisco CCNA Automation', status: 'progress' },
  { name: 'Cisco CCNP ENCOR', status: 'progress' },
  { name: 'Microsoft Azure Administrator (AZ-104)', status: 'planned' },
];
export const statusLabel = { done: 'Completed', progress: 'In progress', planned: 'Planned' };

export const education = [
  { name: 'Bachelor of Software Engineering', org: 'McMaster University', when: 'Graduated 2025' },
  { name: 'Advanced Diploma, Computer Systems Technology', org: 'Cambrian College of Applied Arts and Technology', when: 'Graduated April 2022' },
];

export const principles = [
  { t: 'Design out single points of failure', d: 'Availability is a design decision made before the outage, not a scramble during it.' },
  { t: 'Write it down', d: 'Well-documented systems can be handed over, audited, and fixed by someone other than their author.' },
  { t: 'Segment first, then trust', d: 'VLANs, ACLs, and enforced MFA limit what any one compromised account or device can reach.' },
  { t: 'Automate the repeatable', d: 'Scripts for audits, diagnostics, and backups make routine work consistent and checkable.' },
  { t: 'Watch it, and plan to recover it', d: 'Monitoring and SIEM tell me what happened; tested recovery tells me what to do about it.' },
];
