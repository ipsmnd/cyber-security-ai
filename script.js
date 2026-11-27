$(function () {
  // ---------- DATA (from the brochure) ----------
  var plans = [
    {t:'Training', s:'Offline / Online', i:'person-workspace', p:'₹40K', f:['Any Graduate','By Realtime Practitioners','Projects','LMS Access for 6 Months','Resume Preparation','Doubts Clarification','3 Mock Interviews','Interview Questions','Placement Referral Support','Course Completion Certificate']},
    {t:'JOIP Intensive', s:'Most Popular', i:'mortarboard-fill', p:'₹50K + 30K', hot:1, f:['Full Day Training','LMS Access for 8 Months','Soft Skills & Aptitude Classes','Monthly Placement Screening Tests','Assignments / Mock Tests','Interview Readiness Sessions','Mega Drive Selection Mandatory for Placements','Projects','Placement Assistance for 12 Months','By Realtime Practitioners','Weekly 1 Mock Interview']},
    {t:'Internship', s:'Offline / Online', i:'laptop', p:'₹1 Lakh + 30K', f:['Internship @ IT Company – Ramana Soft','By Realtime Practitioners','3 Hrs Internship / 3 Hrs Training','No Mega Drive Selection','Interview Questions & Readiness Sessions','Monthly Placement Screening Test','6–8 Hrs Daily','LMS Access up to 1 Year','Personalised Assistance for Complex Tasks','100% Placement Assistance – Until You\'re Hired','Internship Completion Certificate (6 months, Ramana Soft or Client)','Realtime Scenario Project']}
  ];
  var cur = [
    ['Introduction to Cybersecurity','shield-lock','The evolution of Cybersecurity|Cybersecurity & situational awareness|The Cybersecurity skills gap|Information security vs cybersecurity|Cybersecurity objectives|Cybersecurity roles'],
    ['Understanding Devices & Infrastructure','hdd-network','Infrastructure terminology|Designing with security in mind|Network topology|OSI layers & TCP/IP model|IPv4 & IPv6|Ports & protocols|Firewalls|VPNs and VPN concentrators|Intrusion Detection Systems|Router, Switch, Proxy|Load balancer|Access point|Network Access Control (NAC)|Mail gateway'],
    ['Ethical Hacking & Bug Bounty','bug','Introduction to Ethical Hacking|Computer & networking basics|Lab setup for virtual machines|Footprinting / information gathering|Scanning|Vulnerability analysis|Sniffing & Man-in-the-Middle|System hacking|Metasploit attacks|Malware threats|Phishing & social engineering|Hacking web servers & web applications|SQL Injection|Wireless attacks|Firewalls, IDS/IPS, Honeypots|Cloud computing & IoT hacking|Cryptography|Penetration testing|Identity theft|Security compliances|Steganography|Risk management|Mobile hacking|DoS/DDoS attacks|Proxies & VPNs|Maltego tool|DNS & MAC spoofing|Introduction to Bug Bounty & terminology|Burp Suite installation|Bug bounty platforms|Report writing for bugs|Vulnerabilities: XML (WordPress), missing SPF, OTP bypass, no rate limit, session hijacking, long password attack'],
    ['Vulnerability Management','search','Introduction to Vulnerability Assessment|Types of Vulnerability Assessment|Basic terminology|Vulnerability Assessment life cycle|Tools (Nessus, OpenVAS)|Report analysis|Risk assessment'],
    ['Security Operations Center (SOC)','activity','SOC overview & team structure|Tier 1, Tier 2, Tier 3 responsibilities|SOC workflow & escalation path|Alert lifecycle stages|Incident response phases|Types of alerts, daily monitoring, KPIs & metrics|Log collection, parsing & normalization|Key log sources: firewall, IDS/IPS, DNS, endpoint (Sysmon/EDR), Active Directory, cloud (CloudTrail, Azure)|Use case design in SIEM|Rule writing – SPL (Splunk)|MITRE ATT&CK mapping|Threat hunting basics|Alert enrichment|Alert suppression & false-positive handling|Ticketing (ServiceNow, JIRA)|Shift handover protocols'],
    ['SIEM & EDR Focus','cpu','Introduction to SIEM|Splunk architecture, ingestion & indexing|Writing SPL queries|Splunk dashboards & alerts|QRadar architecture & flow collection|QRadar rule creation using CRE|AQL querying in QRadar|Introduction to EDR|SentinelOne architecture & agent capabilities|Remote response actions (Kill, Quarantine, Rollback)'],
    ['Malware Analysis','virus','Malware categories: virus, worm, trojan, ransomware, spyware, rootkit, fileless|Behavior & infection chain|Static analysis: file header, strings (FLOSS), PE header, hashing (MD5, SHA256)|Dynamic & sandbox analysis (Any.Run, Cuckoo)|Monitoring tools: ProcMon, RegShot, Wireshark, TCPView|Reverse engineering: Ghidra, IDA Free, x64dbg, OllyDbg|Packers & obfuscation|IOC extraction: file hashes, registry keys, IPs & domains, filenames'],
    ['Email Security','envelope-exclamation','Email-based threats & anatomy of a phishing email|Spear phishing vs generic phishing|Business Email Compromise (BEC)|Malware delivery via email|Spoofing & lookalike domains|Email header components & flow|SPF, DKIM, DMARC|Tools: Microsoft Defender for O365, Proofpoint, Mimecast|Email sandbox solutions|SOC response to phishing|IOC search in mailboxes|Quarantine & purging|User awareness & reporting channels'],
    ['Threat Intelligence','binoculars','Threat intelligence fundamentals & lifecycle|Strategic vs Tactical vs Operational vs Technical TI|IOC formats (IP, hash, URL, domain)|Sources: VirusTotal, AlienVault OTX, Recorded Future, Shodan, URLScan.io|MITRE ATT&CK overview|IOC enrichment in SIEM'],
    ['Digital Forensics (Basic)','fingerprint','Introduction & forensics in incident response|Evidence identification|Disk imaging with FTK Imager|File recovery & analysis|Windows registry artifacts|Browser history & cache inspection|Event log collection|Timeline analysis|Memory analysis using Volatility|Chain of custody & legal considerations|Role of forensics in root cause analysis'],
    ['Cloud Security','cloud-check','Cloud security fundamentals|Shared responsibility model|Cloud infrastructure threats|Misconfigured storage buckets (e.g. S3)|Cloud resource exploitation|Unmonitored API calls & access keys|Credential theft from repositories|Cloud identity attacks|Lateral movement in cloud|Lack of visibility & logging'],
    ['Identity & Access Management (Okta)','person-badge','IAM fundamentals: authentication vs authorization, Joiner–Mover–Leaver|MFA, SSO, SAML, OAuth 2.0, OpenID Connect|Access control: RBAC, ABAC, least privilege, Zero Trust|Governance: PAM, access reviews, compliance|Okta administration: provisioning, SSO, MFA policies, directory integration (AD, Azure AD, LDAP)|Hands-on labs: Okta'],
    ['AI in Cybersecurity','robot','Introduction to AI in cybersecurity|AI & Machine Learning basics|AI vs ML vs Deep Learning|Why AI matters in modern cybersecurity|Generating policy templates using LLMs|NLP-based review for policy clarity & compliance|OneTrust AI – policy automation & compliance tracking|Open-source AI risk tools: RiskSense, OpenGRC'],
    ['Governance & InfoSec Frameworks','journal-check','Governance in cybersecurity|Key principles & policies|ISMS & PDCA cycle|ISO 27001/27002|NIST Cybersecurity Framework|CIS Controls|COBIT|Policy hierarchy: Policies → Standards → Procedures → Guidelines|Writing effective security policies|Roles in GRC: Board, CISO, risk managers, compliance officers|RACI matrix']
  ];
  var red = 'Kali Linux|Parrot OS|Nmap|Burp Suite|Metasploit|SQLmap|Hydra|Hashcat|John the Ripper|Gobuster|FFUF|Nikto|Aircrack-ng|Netcat|theHarvester|Shodan|Tor Browser|Psiphon|TMAC'.split('|');
  var blue = 'Wireshark|Tcpdump|Nessus|OpenVAS|OWASP ZAP|Splunk|Wazuh|ELK Stack|Microsoft Sentinel|Snort|Suricata|CrowdStrike Falcon|Defender for Endpoint|Palo Alto Cortex XDR|Velociraptor|MISP|OpenCTI|VirusTotal|ANY.RUN|Cuckoo Sandbox|YARA|Autopsy|Volatility|Ghidra|IDA Free|REMnux|FLARE VM|Sysinternals|Process Explorer|ProcMon|Sysmon|Autoruns|TCPView|PsExec|Sigcheck|Strings|Event Viewer'.split('|');
  var certs = [['CompTIA Security+','Foundational security knowledge'],['Certified SOC Analyst (CSA)','For SOC-related roles'],['Certified Ethical Hacker (CEH)','For penetration testing roles'],['GIAC Security Essentials (GSEC)','General cybersecurity skills'],['Cyber Threat Intelligence Analyst (CTIA)','For threat intelligence roles']];
  var roles = 'SOC Analyst (L1/L2/L3)|Threat Intelligence Analyst|Incident Responder|Cyber Security Analyst|SIEM Engineer|Threat Hunter|Security Operations Engineer|Network Security Engineer|Firewall & Perimeter Security Administrator|Threat Detection Engineer|Cloud Network Security Engineer|Penetration Tester|Red Team Operator|Bug Bounty Hunter & Security Researcher|Offensive Security Consultant|Exploit Developer & Malware Analyst|Cloud Security Engineer|Cloud Security Architect|DevSecOps Engineer|Container Security Specialist|Kubernetes Security Engineer|Cloud Compliance & Risk Analyst'.split('|');

  // ---------- RENDER ----------
  $.each(plans, function (_, p) {
    var li = $.map(p.f, function (x) { return '<li>' + x + '</li>'; }).join('');
    $('#plans').append('<div class="col-md-6 col-lg-4"><div class="plan' + (p.hot ? ' featured' : '') + '">' + (p.hot ? '<span class="badge badge-top">Popular</span>' : '') +
      '<div class="plan-h"><i class="bi bi-' + p.i + '"></i><h4>' + p.t + '</h4><small>' + p.s + '</small></div><ul>' + li + '</ul><div class="price">' + p.p + '</div></div></div>');
  });
  $.each(cur, function (i, m) {
    var items = $.map(m[2].split('|'), function (x) { return '<li>' + x + '</li>'; }).join('');
    $('#acc').append('<div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#m' + i + '"><i class="bi bi-' + m[1] + ' me-2"></i>' + m[0] +
      '</button></h2><div id="m' + i + '" class="accordion-collapse collapse" data-bs-parent="#acc"><div class="accordion-body"><ul>' + items + '</ul></div></div></div>');
  });
  var chips = function (sel, arr) { $(sel).html($.map(arr, function (x) { return '<span class="chip">' + x + '</span>'; }).join('')); };
  chips('#red', red); chips('#blue', blue); chips('#roles', roles);
  $('#certs').html($.map(certs, function (c) { return '<div class="col-md-6 col-lg"><div class="cert"><b>' + c[0] + '</b>' + c[1] + '</div></div>'; }).join(''));

  // ---------- CURRICULUM SEARCH ----------
  $('#search').on('input', function () {
    var q = $.trim($(this).val()).toLowerCase(), shown = 0;
    $('#acc .accordion-item').each(function () {
      var $it = $(this), hit = false;
      $it.find('li').each(function () {
        var $li = $(this), txt = $li.text(), ok = q && txt.toLowerCase().indexOf(q) > -1;
        $li.html(ok ? txt.replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>') : txt);
        hit = hit || ok;
      });
      var match = !q || hit || $it.find('.accordion-button').text().toLowerCase().indexOf(q) > -1;
      $it.toggle(match); shown += match ? 1 : 0;
      var $c = $it.find('.accordion-collapse');
      if (q && hit) $c.addClass('show'); else $c.removeClass('show');
    });
    $('#noMatch').toggleClass('d-none', shown > 0);
  });

  // ---------- NAV, SCROLL, TOP BUTTON ----------
  $(window).on('scroll', function () {
    var y = $(this).scrollTop();
    $('#nav').toggleClass('scrolled', y > 60);
    $('#top').fadeToggle(150, function () {}, y > 400);
    if (y > 400) $('#top').show(); else $('#top').hide();
  });
  $('#top').on('click', function () { $('html,body').animate({ scrollTop: 0 }, 500); });
  $('a[href^="#"]').on('click', function (e) {
    var t = $(this.getAttribute('href'));
    if (t.length) { e.preventDefault(); $('html,body').animate({ scrollTop: t.offset().top - 60 }, 500); $('#menu').collapse('hide'); }
  });

  // ---------- COUNTERS ----------
  var done = false;
  function counters() {
    if (done || $(window).scrollTop() + $(window).height() < $('.stats').offset().top + 80) return;
    done = true;
    $('.count').each(function () {
      var $c = $(this), to = +$c.data('to');
      $({ n: 0 }).animate({ n: to }, { duration: 1800, step: function () { $c.text(Math.floor(this.n).toLocaleString('en-IN')); }, complete: function () { $c.text(to.toLocaleString('en-IN')); } });
    });
  }
  $(window).on('scroll load', counters); counters();

  // ---------- CONTACT FORM ----------
  $('#form').on('submit', function (e) {
    e.preventDefault();
    var ok = $.trim($('#name').val()) && /^[0-9+\s-]{10,15}$/.test($.trim($('#phone').val())) && /^\S+@\S+\.\S+$/.test($.trim($('#email').val()));
    $('#msg').html(ok
      ? '<div class="alert alert-success mb-0">Thanks, ' + $('<div>').text($('#name').val()).html() + '! We will call you shortly about the ' + $('#plan').val() + ' program.</div>'
      : '<div class="alert alert-danger mb-0">Please enter a valid name, 10-digit phone number and email.</div>');
    if (ok) this.reset();
  });
});
