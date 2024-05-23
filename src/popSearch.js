const jsonData = {
  Data: {
    Username: {
      "Username Search Engines": {
        Namechk: {
          Name: "Namechk",
          Description:
            "Namechk is a username and domain search engine that allows users to check the availability of a particular username or domain across various social media platforms and websites.",
          Keywords:
            "username, domain, search engine, availability, social media, websites, registration, brand protection",
          Input: "Username, Domain",
          Output: "Username, Email Address, Domains, Social Media Profile",
          URL: "https://namechk.com/",
          Date: "2024-03-27",
        },
      },
      "Specific Sites": {
        "Amazon Usernames (M)": {
          Name: "Amazon Usernames (M)",
          Description:
            "A search engine that uses Google to search for specific usernames on Amazon's site.",
          Keywords:
            "Amazon, Google, search, usernames, site, specific, engine, results",
          Input: "Username",
          Output:
            "Username, Full Name, Email Address, Phone Number, Address, City, State, Country, Zip Code, Organization Name, Job Title, Work Experience, Education, Skills, Certifications, Bio, Photos, Awards, Publications, Patents, Languages, Interests, Hobbies, Profiles, Website, Blog, Forum, Posts, Comments, Likes, Followers, Following, Groups, Events, Videos, Audio, Messages, Chat, Friends, Status, Check-Ins, Reviews, Ratings, Tags, Mentions, Hashtags, Links, Urls, Domains, Ip Addresses, Files, Hash, Crypto, Calendar Events, Documents, Identity Documents, Vehicle Information, Date And Time, Location, Coordinates, Password, Secrets, Api Keys, Tokens, Access Keys, Credentials, Sensitive Information, Vulnerabilities, Exploits, Malware, Security Breaches, Court Records, Police Records, Medical Records, Pharmacy Records, Insurance Details, Financial Records, Investment Details, Property Ownership, Vehicle Registration Details, Aircraft Registration Details, Boat Registration Details, Firearm Registration Details, Social Media Activity, Internet Footprint, Digital Assets, E-commerce Activity, Streaming Activity, Gaming Activity, Educational Records, Certification Records, Employment History, Professional Licenses, Credit Score, Banking Information, Tax Records, Legal Proceedings, Immigration Records, Travel Records, Hotel Stays, Rental Records, Subscription Services, Utility Usage, Environmental Impact, Charitable Donations, Political Affiliations, Voting Records, Public Speeches, Written Articles, Podcast Appearances, Television Appearances, Radio Appearances, Online Courses, Webinars, Seminars, Workshops, Conferences, Symposiums, Exhibitions, Trade Shows, Auctions, Sales Transactions, Purchase History, Warranty Registrations, Service Requests, Customer Feedback, Product Reviews, Brand Interactions, Social Influence, Cultural Contributions, Historical Significance, Geopolitical Influence, Economic Impact, Scientific Contributions, Technological Innovations, Artistic Expressions, Literary Contributions, Philosophical Ideas, Educational Influence, Social Reform Initiatives, Environmental Conservation Efforts, Humanitarian Efforts, Public Health Contributions",
          URL: "https://www.google.com/search?q=site:amazon.com+google",
          Date: "2024-03-27",
        },
      },
    },
    "Email Address": {
      "Email Search": {
        ThatsThem: {
          Name: "ThatsThem",
          Description:
            "A website for reverse email lookups that allows users to find information about individuals using their email address.",
          Keywords:
            "Email, Lookup, Reverse, Information, Individuals, Search, OSINT, ThatsThem",
          Input: "Email Address",
          Output:
            "First Name, Last Name, Full Name, Username, Email Address, Phone Number, Address, City, State, Country, Zip Code",
          URL: "https://thatsthem.com/reverse-email-lookup",
          Date: "2024-03-27",
        },
      },
      "Common Email Formats": {
        "Corporatate Email Formats": {
          Name: "Corporatate Email Formats",
          Description:
            "A website that allows users to access corporate email formats",
          Keywords:
            "Email, Corporate, Format, Google, Account, Sign in, Privacy, Terms",
          Input: "None",
          Output: "Email Address, Common Email Formats",
          URL: "https://sites.google.com/site/emails4corporations/home",
          Date: "2024-03-27",
        },
      },
      "Email Verification": {
        MailTester: {
          Name: "MailTester",
          Description:
            "MailTester is a website that allows users to verify the validity of an email address.",
          Keywords:
            "Email, Verification, Validation, Tester, Check, Validate, Verify, Email Address",
          Input: "Email Address",
          Output: "Email Verification",
          URL: "http://mailtester.com/testmail.php",
          Date: "2024-03-27",
        },
      },
      "Breach Data": {
        "Have I been pwned?": {
          Name: "Have I been pwned?",
          Description:
            "A website that allows users to check if their personal data has been compromised by data breaches.",
          Keywords:
            "Data Breach, Email Address, Security, Passwords, Pwned, Privacy, Breaches, Pastes",
          Input: "Email Address",
          Output:
            "Breach Data, Security Breaches, Email Address, Sensitive Information",
          URL: "https://haveibeenpwned.com/",
          Date: "2024-03-27",
        },
      },
      "Mail Blacklists": {
        MxToolbox: {
          Name: "MxToolbox",
          Description:
            "MxToolbox is an online tool that provides MX record lookup and diagnostics for email delivery problems. It directly checks the domain's authoritative name server and provides instant updates to MX records.",
          Keywords:
            "MX Lookup, Email Delivery, DNS Records, Blacklists, Diagnostics, Mail Server, Reverse DNS, IP Address",
          Input: "Domain Name, IP Address",
          Output:
            "MX Records, DNS Records, Mail Server Information, Response Time Performance, Blacklist Status",
          URL: "http://mxtoolbox.com/",
          Date: "2024-03-27",
        },
      },
    },
    "Domain Name": {
      "Whois Records": {
        "Domain Dossier": {
          Name: "Domain Dossier",
          Description:
            "The Domain Dossier tool generates reports from public records about domain names and IP addresses to help solve problems, investigate cybercrime, or just better understand how things are set up.",
          Keywords:
            "Domain, IP address, DNS records, Whois records, Traceroute, Service scan, Network investigation, Cybercrime",
          Input: "Domain, IP Address, URL, Email Address",
          Output:
            "Owner\u2019s contact information, Registrar and registry information, The company that is hosting a Web site, Where an IP address is geographically located, What type of server is at the address, The upstream networks of a site, DNS records, Whois records, Traceroute, Service scan",
          URL: "http://centralops.net/co/DomainDossier.aspx",
          Date: "2024-03-27",
        },
      },
      Subdomains: {
        SynapsInt: {
          Name: "SynapsInt",
          Description:
            "SynapsInt is a comprehensive Open Source Intelligence (OSINT) platform providing deep insights and analytics. It caters to a wide range of users, including security researchers, investigators, and intelligence analysts.",
          Keywords:
            "OSINT, Analytics, Intelligence, Security, Investigation, Research, Data, Insights",
          Input:
            "Username, Domain, Email Address, Phone Number, Full Name, Organization Name, Ip Address, Url, Search Term, Search Query, Social Media Profile, Photo, Video, Audio",
          Output:
            "First Name, Last Name, Full Name, Username, Email Address, Phone Number, Address, City, State, Country, Zip Code, Date Of Birth, Alias Names, Organization Name, Job Title, Work Experience, Education, Skills, Certifications, Bio, Photos, Resume, Awards, Publications, Patents, Languages, Interests, Hobbies, Profiles, Website, Blog, Forum, Posts, Comments, Likes, Followers, Following, Groups, Events, Videos, Audio, Messages, Chat, Friends, Status, Check-Ins, Reviews, Ratings, Tags, Mentions, Hashtags, Links, Urls, Domains, Ip Addresses, Files, Hash, Crypto, Calendar Events, Documents, Identity Documents, Vehicle Information, Date And Time, Location, Coordinates, Password, Secrets, Api Keys, Tokens, Access Keys, Credentials, Sensitive Information, Vulnerabilities, Exploits, Malware, Security Breaches, Court Records, Police Records, Medical Records, Pharmacy Records, Insurance Details, Financial Records, Investment Details, Property Ownership, Vehicle Registration Details, Aircraft Registration Details, Boat Registration Details, Firearm Registration Details, Social Media Activity, Internet Footprint, Digital Assets, E-commerce Activity, Streaming Activity, Gaming Activity, Educational Records, Certification Records, Employment History, Professional Licenses, Credit Score, Banking Information, Tax Records, Legal Proceedings, Immigration Records, Travel Records, Hotel Stays, Rental Records, Subscription Services, Utility Usage, Environmental Impact, Charitable Donations, Political Affiliations, Voting Records, Public Speeches, Written Articles, Podcast Appearances, Television Appearances, Radio Appearances, Online Courses, Webinars, Seminars, Workshops, Conferences, Symposiums, Exhibitions, Trade Shows, Auctions, Sales Transactions, Purchase History, Warranty Registrations, Service Requests, Customer Feedback, Product Reviews, Brand Interactions, Social Influence, Cultural Contributions, Historical Significance, Geopolitical Influence, Economic Impact, Scientific Contributions, Technological Innovations, Artistic Expressions, Literary Contributions, Philosophical Ideas, Educational Influence, Social Reform Initiatives, Environmental Conservation Efforts, Humanitarian Efforts, Public Health Contributions",
          URL: "https://synapsint.com",
          Date: "2024-03-27",
        },
      },
      Discovery: {
        Shodan: {
          Name: "Shodan",
          Description:
            "Shodan is the world's first search engine for Internet-connected devices. It provides internet intelligence and helps in making better decisions. It helps in discovering everything from power plants, mobile phones, refrigerators to Minecraft servers. It keeps track of all the devices that are directly accessible from the Internet and provides a comprehensive view of all exposed services to help you stay secure.",
          Keywords:
            "Internet of Things, Search Engine, Internet Intelligence, Network Exposure, IP Enrichment, Browser Integration, Developer API, Network Monitoring",
          Input: "Search Query, Domain, IP Address, Username",
          Output:
            "IP Addresses, Domains, Network Exposure Details, Internet Connected Devices Information, Security Breaches, Vulnerabilities",
          URL: "https://www.shodan.io/",
          Date: "2024-03-27",
        },
      },
      "Certificate Search": {
        "Google's Certificate Transparency": {
          Name: "Google's Certificate Transparency",
          Description:
            "A public site that provides information on known logs of Google's Certificate Transparency project.",
          Keywords:
            "Google, Certificate Transparency, Logs, Security, Domains, Certificates, GitHub, Open Source",
          Input: "Domain Name",
          Output: "Domain, Certificates, Security Vulnerabilities",
          URL: "https://www.certificate-transparency.org/known-logs",
          Date: "2024-03-27",
        },
      },
      PassiveDNS: {
        "Security Trails": {
          Name: "Security Trails",
          Description:
            "A comprehensive database of domain names, IP addresses, and other web-related data for cyber security research and threat intelligence.",
          Keywords:
            "Cyber security, Threat intelligence, Domain name, IP address, DNS history, WHOIS data",
          Input: "API Key, Domain, IP Address, Search Query",
          Output:
            "Domains, IP Addresses, Hostnames, DNS records, WHOIS records, User Agents, Ports, Companies, Tags, History, Contacts, Statistics",
          URL: "https://securitytrails.com/",
          Date: "2024-03-27",
        },
      },
      Reputation: {
        "AbuseIPDB (Webpage and API)": {
          Name: "AbuseIPDB (Webpage and API)",
          Description:
            "AbuseIPDB is a website and API that allows users to check and report IP addresses involved in malicious activities. It is primarily used by network administrators and cybersecurity professionals.",
          Keywords:
            "IP address, cybersecurity, network administration, abuse report, malicious activity, IP reputation, IP database, API",
          Input: "Ip Address, Domain, Url",
          Output:
            "IP Addresses, Domain, Url, Reputation, Abuse Reports, Malware, Vulnerabilities, Security Breaches, Abuse Confidence Score",
          URL: "https://www.abuseipdb.com/",
          Date: "2024-03-27",
        },
      },
      "Domain Blacklists": {
        "Ransomware Tracker Abuse.ch": {
          Name: "Ransomware Tracker Abuse.ch",
          Description:
            "A website that provides a downloadable list of domains associated with ransomware activities",
          Keywords:
            "Ransomware, Tracker, Abuse, Domain, Blacklist, Cybersecurity, Threats, Malware",
          Input: "None",
          Output: "Domains, Threats, Ransomware, Malware, Cybersecurity",
          URL: "http://ransomwaretracker.abuse.ch/downloads/RW_DOMBL.txt",
          Date: "2024-03-27",
        },
      },
      Typosquatting: {
        "DNS Twist (T)": {
          Name: "DNS Twist (T)",
          Description:
            "Domain name permutation engine for detecting homograph phishing attacks, typo squatting, and brand impersonation. It generates a comprehensive list of permutations based on a provided domain name, and subsequently verifies whether any of these permutations are in use. It can also generate fuzzy hashes of web pages to detect ongoing phishing attacks or brand impersonation.",
          Keywords:
            "dns, osint, scanner, phishing, domains, fuzzing, threat-hunting, typosquatting",
          Input: "Domain, Url",
          Output: "Domains, Urls, Ip Addresses, Vulnerabilities",
          URL: "https://github.com/elceef/dnstwist",
          Date: "2024-03-27",
        },
      },
      Analytics: {
        BuiltWith: {
          Name: "BuiltWith",
          Description:
            "BuiltWith is a website profiler, lead generation, competitive analysis and business intelligence tool providing technology adoption, ecommerce data and usage analytics for the internet.",
          Keywords:
            "Web Technology Trends, eCommerce Data, Lead Generation, Sales Intelligence, Market Analysis, Cyber Risk Auditing, API Access, CRM Integrations",
          Input: "Domain",
          Output:
            "Analytics, Hosting, CMS, eCommerce technologies, Market Share, Technology usage, Employee count, Social media count, Industry, Location, Rank",
          URL: "http://builtwith.com/",
          Date: "2024-03-27",
        },
      },
      "URL Expanders": {
        GetLinkInfo: {
          Name: "GetLinkInfo",
          Description:
            "A tool for expanding shortened URLs to reveal the original link",
          Keywords:
            "URL, expand, link, shortener, original, reveal, safety, analysis",
          Input: "Url",
          Output: "Urls, Domains, Ip Addresses",
          URL: "http://www.getlinkinfo.com/",
          Date: "2024-03-27",
        },
      },
      "Change Detection": {
        VisualPing: {
          Name: "VisualPing",
          Description: "#1 Website change detection, monitoring and alerts",
          Keywords: "Website, Change Detection, Monitoring, Alerts, VisualPing",
          Input: "URL",
          Output: "Change Detection, Monitoring, Alerts",
          URL: "http://visualping.io/",
          Date: "2024-03-27",
        },
      },
      "Social Analysis": {
        "Google Trends": {
          Name: "Google Trends",
          Description:
            "Google Trends is a website by Google that analyzes the popularity of top search queries in Google Search across various regions and languages. The website uses graphs to compare the search volume of different queries over time.",
          Keywords:
            "Google, Trends, Search, Popularity, Analysis, Data, Visualization, Insights",
          Input: "Search Term, Location, Date And Time",
          Output:
            "Search Interest, Trends Data, Events, Issues, Topics, Location, Date And Time",
          URL: "https://www.google.com/trends/",
          Date: "2024-03-27",
        },
      },
      DNSSEC: {
        "DNSSEC Analyzer": {
          Name: "DNSSEC Analyzer",
          Description:
            "A tool by Verisign Labs to test and analyze the Domain Name System Security Extensions (DNSSEC) of a given domain name.",
          Keywords:
            "DNSSEC, Domain Name, Verisign, Security, Analyzer, DNS, Trust Anchor, Name Servers",
          Input: "Domain Name",
          Output: "DNSSEC Analysis",
          URL: "http://dnssec-debugger.verisignlabs.com/",
          Date: "2024-03-27",
        },
      },
      "Cloud Resources": {
        "Public Buckets": {
          Name: "Public Buckets",
          Description:
            "A tool that provides access to publicly accessible cloud storage buckets, allowing users to search and filter through the contents of these buckets.",
          Keywords:
            "Cloud Storage, Public Buckets, AWS, Azure, Digital Ocean, Google Cloud Platform, File Search, Data Analysis",
          Input:
            "Search Term, Search Query, File, Domain, Regex Pattern, Filename Extensions, Size Range, Last Modified Range, Order By",
          Output:
            "Files, Domains, Cloud Resources, File Details, Last Modified Information, Size Information, Data, URLs",
          URL: "https://buckets.grayhatwarfare.com/",
          Date: "2024-03-27",
        },
      },
      Vulnerabilities: {
        Scanners: {
          "Sn1per (T)": {
            Name: "Sn1per (T)",
            Description:
              "Attack Surface Management Platform that provides automated, deep, and continuous security for organizations of all sizes. It integrates with leading commercial and open source vulnerability scanners to discover vulnerabilities across the attack surface.",
            Keywords:
              "security, hacking, cybersecurity, penetration-testing, pentesting, pentest-scripts, security-tools, osint-framework",
            Input: "Domain, Url, Ip Address, File",
            Output:
              "Vulnerabilities, Exploits, Malware, Security Breaches, Domains, Ip Addresses, Files, Hash, Secrets, Sensitive Information",
            URL: "https://github.com/1N3/Sn1per",
            Date: "2024-03-27",
          },
        },
        Tools: {
          "Burp Suite (T)": {
            Name: "Burp Suite (T)",
            Description:
              "Burp Suite is a web application security testing software offering a range of products for different needs including enterprise, professional, and community editions. It provides tools for web vulnerability scanning, penetration testing, automated scanning, bug bounty hunting, and compliance. It also offers training and support for users.",
            Keywords:
              "Web Security, Vulnerability Scanning, Penetration Testing, Automated Scanning, Bug Bounty Hunting, Compliance, Training, Support",
            Input: "Username, Domain, Email Address",
            Output: "Vulnerabilities, Exploits, Security Breaches",
            URL: "https://portswigger.net/burp/",
            Date: "2024-03-27",
          },
        },
        "Report Malicious Sites": {
          Microsoft: {
            Name: "Microsoft",
            Description:
              "Microsoft's support page where users can report unsafe sites. The page also offers various other Microsoft products and services.",
            Keywords:
              "Microsoft, Support, Report, Unsafe Sites, Windows, Xbox, Office, Surface",
            Input: "Domain, Url",
            Output: "Confirmation of report submission",
            URL: "https://www.microsoft.com/en-us/wdsi/support/report-unsafe-site-guest",
            Date: "2024-03-27",
          },
        },
      },
      "Instant Messaging": {
        Skype: {
          "Skype Web Client": {
            Name: "Skype Web Client",
            Description:
              "A web-based platform for instant messaging and video conferencing powered by Microsoft",
            Keywords:
              "Instant Messaging, Skype, Video Call, Chat, Microsoft, Web Client, Communication, Online Meeting",
            Input: "Username, Email Address",
            Output: "Chat, Messages, Audio, Video, Files",
            URL: "https://web.skype.com/",
            Date: "2024-03-27",
          },
        },
      },
      "People Search Engines": {
        "General People Search": {
          "Family Tree Now": {
            Name: "Family Tree Now",
            Description:
              "A free genealogy and people search site that provides detailed information about people and their connections to others",
            Keywords:
              "Genealogy, People Search, Family Tree, Ancestry, Heritage, Relatives, Public Records",
            Input: "Full Name, Location",
            Output:
              "First Name, Last Name, Full Name, Address, City, State, Country, Zip Code, Relatives, Public Records",
            URL: "http://www.familytreenow.com/",
            Date: "2024-03-27",
          },
        },
      },
      Dating: {
        "Match.com": {
          Name: "Match.com",
          Description:
            "Match.com is an online dating platform that allows users to find potential matches based on their preferences.",
          Keywords:
            "Dating, Matchmaking, Online, Relationships, Singles, Age, Zip Code, Gender",
          Input: "Age, Gender, Location, Search Term",
          Output: "Profiles, Photos, Location, Age, Gender",
          URL: "http://www.match.com/",
          Date: "2024-03-27",
        },
      },
      "Public Records": {
        "Property Records": {
          "Melissa Data - Property Viewer (R)": {
            Name: "Melissa Data - Property Viewer (R)",
            Description:
              "Melissa Data - Property Viewer (R) is a website that provides various data verification, enhancement, and management services. It offers address, phone, email, and name verification tools, identity verification, e-commerce solutions, and mailing tools. The website also provides data quality platforms and data for various industries including healthcare, CRM, insurance, e-commerce, mailing & shipping, real estate, fintech & financial services, transportation & logistics, and government & public sector.",
            Keywords:
              "Data Verification, Address Verification, Phone Verification, Email Verification, Name Verification, Identity Verification, E-Commerce Solutions, Mailing Tools",
            Input:
              "Username, Domain, Email Address, Phone Number, Full Name, Organization Name, Ip Address, Location, Url, Search Term, Identity Document, Financial Records, Property Records",
            Output:
              "First Name, Last Name, Full Name, Username, Email Address, Phone Number, Address, City, State, Country, Zip Code, Organization Name, Job Title, Work Experience, Education, Skills, Certifications, Bio, Photos, Resume, Awards, Publications, Patents, Languages, Interests, Hobbies, Profiles, Website, Blog, Forum, Posts, Comments, Likes, Followers, Following, Groups, Events, Videos, Audio, Messages, Chat, Friends, Status, Reviews, Ratings, Tags, Mentions, Hashtags, Links, Urls, Domains, Ip Addresses, Files, Hash, Calendar Events, Documents, Identity Documents, Vehicle Information, Date And Time, Location, Coordinates, Password, Secrets, Api Keys, Tokens, Access Keys, Credentials, Sensitive Information, Vulnerabilities, Exploits, Malware, Security Breaches, Court Records, Police Records, Medical Records, Pharmacy Records, Insurance Details, Financial Records, Investment Details, Property Ownership, Vehicle Registration Details, Social Media Activity, Internet Footprint, Digital Assets, E-commerce Activity, Streaming Activity, Gaming Activity, Educational Records, Certification Records, Employment History, Professional Licenses, Credit Score, Banking Information, Tax Records, Legal Proceedings, Immigration Records, Travel Records, Hotel Stays, Rental Records, Subscription Services, Utility Usage, Environmental Impact, Charitable Donations, Political Affiliations, Voting Records, Public Speeches, Written Articles, Podcast Appearances, Television Appearances, Radio Appearances, Online Courses, Webinars, Seminars, Workshops, Conferences, Symposiums, Exhibitions, Trade Shows, Auctions, Sales Transactions, Purchase History, Warranty Registrations, Service Requests, Customer Feedback, Product Reviews, Brand Interactions, Social Influence, Cultural Contributions, Historical Significance, Geopolitical Influence, Economic Impact, Scientific Contributions, Technological Innovations, Artistic Expressions, Literary Contributions, Philosophical Ideas, Educational Influence, Social Reform Initiatives, Environmental Conservation Efforts, Humanitarian Efforts, Public Health Contributions",
            URL: "http://www.melissadata.com/lookups/propertyviewer.asp",
            Date: "2024-03-27",
          },
        },
      },
      "Social Networks": {
        Facebook: {
          Search: {
            "FB Email Search": {
              Name: "FB Email Search",
              Description:
                "A tool to search for profiles on Facebook using an email address.",
              Keywords:
                "Facebook, Email, Search, Profile, Social Network, User, Public, Account",
              Input: "Email Address",
              Output:
                "Full Name, Username, Photos, Friends, Groups, Likes, Posts, Comments, Followers, Following",
              URL: "https://www.facebook.com/public?query=email@gmail.com&nomc=0",
              Date: "2024-03-27",
            },
          },
        },
        Instagram: {
          "Osintgram (T)": {
            Name: "Osintgram (T)",
            Description:
              "Osintgram is a OSINT tool on Instagram. It offers an interactive shell to perform analysis on Instagram account of any users by its nickname",
            Keywords:
              "OSINT, Instagram, Analysis, Tool, Penetration Testing, Information Gathering, Python, Nickname",
            Input: "Username",
            Output:
              "Email Address, Phone Number, Followers, Following, Likes, Comments, Hashtags, User Info, Photos, Stories, Tags, Mentions",
            URL: "https://github.com/Datalux/Osintgram",
            Date: "2024-03-27",
          },
        },
        Twitter: {
          Search: {
            "Twitter Advanced Search": {
              Name: "Twitter Advanced Search",
              Description:
                "Twitter Advanced Search allows users to search for specific tweets, users, or conversations on Twitter. It provides advanced search filters that can be used to narrow down search results based on specific criteria such as words, people, places, and dates.",
              Keywords:
                "Twitter, Advanced Search, Social Media, Tweets, Users, Conversations, Search Filters",
              Input:
                "Username, Search Term, Search Query, Location, Date And Time, Alias Names, Hashtags",
              Output:
                "Username, Full Name, Bio, Photos, Posts, Comments, Likes, Followers, Following, Mentions, Hashtags, Urls, Date And Time, Location",
              URL: "https://twitter.com/search-advanced",
              Date: "2024-03-27",
            },
          },
        },
        Reddit: {
          "Reddit Metis": {
            Name: "Reddit Metis",
            Description:
              "RedditMetis gets the list of the last 1000 comments and 1000 submissions of a Reddit account and visually shows user statistics. The site also infers a Reddit profile's attributes and possessions by individually reading comments and submissions using natural language processing techniques.",
            Keywords:
              "Reddit, User, Analysis, Statistics, Comments, Submissions, Natural Language Processing, Data",
            Input: "Username",
            Output:
              "Username, Comments, Posts, Interests, Hobbies, Social Media Activity",
            URL: "https://redditmetis.com/#",
            Date: "2024-03-27",
          },
        },
        LinkedIn: {
          "LinkedInt - LinkedIn Recon Tool": {
            Name: "LinkedInt - LinkedIn Recon Tool",
            Description:
              "An open-source LinkedIn Recon Tool hosted on GitHub. The tool is designed to gather information about LinkedIn profiles and is intended for educational and testing purposes.",
            Keywords:
              "LinkedIn, Recon Tool, Open Source, GitHub, Information Gathering, Education, Testing, Python",
            Input: "Username, Organization Name, Email Address",
            Output:
              "Full Name, Username, Email Address, Organization Name, Job Title, Work Experience, Education, Skills, Certifications, Photos",
            URL: "https://github.com/vysec/LinkedInt",
            Date: "2024-03-27",
          },
        },
        "Other Social Networks": {
          Myspace: {
            Name: "Myspace",
            Description:
              "Myspace is a social networking website offering an interactive, user-submitted network of friends, personal profiles, blogs, groups, photos, music, and videos. It is headquartered in Beverly Hills, California.",
            Keywords: "Social Network, Music, Videos, News, Artist, Profiles",
            Input: "Username, Full Name, Email Address, Search Term",
            Output:
              "Full Name, Username, Email Address, Bio, Photos, Videos, Music, News, Artist Profiles, Interests, Hobbies, Friends, Groups, Events, Likes, Followers, Following, Posts, Comments, Tags, Mentions",
            URL: "https://myspace.com/",
            Date: "2024-03-27",
          },
        },
        Search: {
          "Periscope Search": {
            Name: "Periscope Search",
            Description:
              "A search service related to the Periscope social network. Currently redirecting, possibly not active.",
            Keywords:
              "Periscope, Search, Social Network, Redirecting, Inactive",
            Input: "None",
            Output: "None",
            URL: "http://www.perisearch.net/",
            Date: "2024-03-27",
          },
        },
      },
      "Geolocation Tools / Maps": {
        "Geolocation Tools": {
          SunCalc: {
            Name: "SunCalc",
            Description:
              "SunCalc is a little app that shows sun movement and sunlight phases during the given day at the given location. It provides sun positions at sunrise, specified time and sunset. The thin orange curve is the current sun trajectory, and the yellow area around is the variation of sun trajectories during the year.",
            Keywords:
              "Sun position, sunlight phases, sunrise, sunset, dusk, dawn, sun trajectory, sun movement",
            Input: "Location, Date And Time",
            Output:
              "Sunrise, Sunset, Solar noon, Astronomical twilight, Nautical twilight, Civil twilight, Daylight, Dusk, Dawn",
            URL: "http://suncalc.net/",
            Date: "2024-03-27",
          },
        },
      },
      "Telephone Numbers": {
        Voicemail: {
          Slydial: {
            Name: "Slydial",
            Description:
              "Slydial is a ringless voicemail messaging app that allows users to connect directly to someone's voicemail, skip the conversation and leave a message. It also offers a group messaging feature to send a pre-recorded voicemail to multiple people at once.",
            Keywords:
              "Voicemail, Messaging, Communication, Mobile App, Direct Call, Group Messaging, Premium Subscription, Voice Messaging",
            Input: "Phone Number, Full Name, Email Address",
            Output:
              "Voicemail, Message Delivery Confirmation, Premium Subscription Features, Customer Care Support",
            URL: "https://www.slydial.com/",
            Date: "2024-03-27",
          },
        },
      },
      Metadata: {
        "ExifTool (T)": {
          Name: "ExifTool (T)",
          Description:
            "ExifTool is a platform-independent Perl library plus a command-line application for reading, writing and editing meta information in a wide variety of files. It supports many different metadata formats including EXIF, GPS, IPTC, XMP, JFIF, GeoTIFF, ICC Profile, Photoshop IRB, FlashPix, AFCP and ID3, as well as the maker notes of many digital cameras by Canon, Casio, DJI, FLIR, FujiFilm, GE, GoPro, HP, JVC/Victor, Kodak, Leaf, Minolta/Konica-Minolta, Motorola, Nikon, Nintendo, Olympus/Epson, Panasonic/Leica, Pentax/Asahi, Phase One, Reconyx, Ricoh, Samsung, Sanyo, Sigma/Foveon and Sony.",
          Keywords:
            "ExifTool, Metadata, Editing, Reading, Writing, Perl Library, Command-line Application, Digital Cameras",
          Input: "File, Hash",
          Output:
            "First Name, Last Name, Full Name, Email Address, Phone Number, Address, City, State, Country, Zip Code, Date Of Birth, Organization Name, Job Title, Work Experience, Education, Skills, Certifications, Bio, Photos, Videos, Audio, Messages, Chat, Status, Reviews, Ratings, Tags, Mentions, Hashtags, Links, Urls, Domains, Ip Addresses, Files, Crypto, Date And Time, Location, Coordinates, Secrets, Api Keys, Tokens, Access Keys, Credentials, Sensitive Information, Vulnerabilities, Exploits, Malware, Security Breaches, Court Records, Police Records, Medical Records, Pharmacy Records, Insurance Details, Financial Records, Investment Details, Property Ownership, Vehicle Registration Details, Aircraft Registration Details, Boat Registration Details, Firearm Registration Details, Social Media Activity, Internet Footprint, Digital Assets, E-commerce Activity, Streaming Activity, Gaming Activity, Educational Records, Certification Records, Employment History, Professional Licenses, Credit Score, Banking Information, Tax Records, Legal Proceedings, Immigration Records, Travel Records, Hotel Stays, Rental Records, Subscription Services, Utility Usage, Environmental Impact, Charitable Donations, Political Affiliations, Voting Records, Public Speeches, Written Articles, Podcast Appearances, Television Appearances, Radio Appearances, Online Courses, Webinars, Seminars, Workshops, Conferences, Symposiums, Exhibitions, Trade Shows, Auctions, Sales Transactions, Purchase History, Warranty Registrations, Service Requests, Customer Feedback, Product Reviews, Brand Interactions, Social Influence, Cultural Contributions, Historical Significance, Geopolitical Influence, Economic Impact, Scientific Contributions, Technological Innovations, Artistic Expressions, Literary Contributions, Philosophical Ideas, Educational Influence, Social Reform Initiatives, Environmental Conservation Efforts, Humanitarian Efforts, Public Health Contributions",
          URL: "http://www.sno.phy.queensu.ca/~phil/exiftool/",
          Date: "2024-03-27",
        },
      },
      Terrorism: {
        "Global Terrorism Database": {
          Name: "Global Terrorism Database",
          Description:
            "The Global Terrorism Database (GTD) is an open-source database including information on terrorist events around the world from 1970 through 2020. The database includes systematic data on domestic as well as international terrorist incidents.",
          Keywords:
            "Terrorism, Database, Global, Open-source, Domestic Terrorism, International Terrorism, Terrorist Events, Data Visualization",
          Input:
            "Date, Region, Country, Perpetrator Group, Weapon Type, Attack Type, Target Type",
          Output:
            "Information on Terrorist Attacks, Location and Frequency of Attacks, Geographic Concentration and Intensity of Attacks, Details of Notable Attacks, Patterns of Terrorism, Terrorism Trends, Data Visualizations",
          URL: "http://www.start.umd.edu/gtd/",
          Date: "2024-03-27",
        },
      },
    },
  },
};

//to search the details of the selected node with last child.
const searchJSON = (term, results = []) => {
  const search = (data) => {
    if (data instanceof Object) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          if (typeof data[key] === "object") {
            search(data[key]);
          } else if (data[key].includes(term)) {
            results.push(data);
            break;
          }
        }
      }
    }
  };

  search(jsonData);

  return results;
};

export default searchJSON;
