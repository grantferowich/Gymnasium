/**
 * Input: a block of text
 * output: a block of text which is unformatted
 * */

let words = 'Wake Forest University === home.';

words = "This post first appeared at Global Security, a think tank in Washington, D.C. where I am a Visiting Fellow. A paper written by Timothy L. Thomas for 'The US Army War College Quarterly: Parameters' in 1998 introduces the chemical-electrical activity in the brain, heart and nervous system as the human body's 'data processors.'' Thomas concludes in no uncertain terms, 'We are on the threshold of an era in which these data processors of the human body may be manipulated or debilitated.' Thomas' report was produced some 25 years ago now. Already, Thomas warned 'strobe lights have been known to cause epileptic seizures' while stating an 'entirely new arsenal of weapons, based on devices designed to introduce subliminal messages or to alter the body's psychological and data-processing capabilities, might be used to incapacitate individuals. These weapons aim to control or alter the psyche, or to attack the various sensory and data-processing systems of the human organism.' Thomas must have been referring to a banned Pokemon episode known as Electric Soldier Porygon, which is a TV episode responsible for emitting 12 Hz waves causing 700 Japanese children to be admitted into hospitals due to seizures. In the episode, Pikachu has a move to stop certain types of missiles. To stop the missiles against his onscreen foe, Pikachu relies on the Thunderbolt attack, which causes strobe lights to appear on the screen. Instead of simply fending off the foe, Pikachus Thunderbolt caused serious harm to hundreds of kids in real life. What is at stake? 'The body is capable not only of being deceived, manipulated, or misinformed but also shut down or destroyed--just as any other data-processing system. The 'data' the body receives from external sources--such as electromagnetic, vortex, or acoustic energy waves--or creates through its own electrical or chemical stimuli can be manipulated or changed just as the data (information) in any hardware system can be altered.' Thomas has warned there are weapons systems which aim to manipulate and degrade the body's natural biological systems through means such as electromagnetic, vortex, or acoustic energy waves. Firewalls are essentially devices which shut down traffic in a computer network. If the network detects there is a sufficient amount of traffic attempting to adversely affect the performance of a computer network the firewall will activate and sever the computer's main server from the malicious traffic. Computers are able to run without being slowed down or frozen by malware or viruses thanks to firewalls. There are physical and virtual firewalls. In the physical version, a computer system will literally be detached from the area where there is undesirable and malicious activity. These firewalls basically keep computers safe to run unencumbered by the adverse effects of malware and viruses. There are also virtual firewalls which exist to protect your activity while using a virtual machine. The idea is the same. When there is unauthorized, undesirable, and malicious network traffic then block the computer system from receiving the malicious traffic as a network input.

Thomas' US Army War College report goes on to discuss an argument offered by a "young, well-intentioned" researcher named Dr. Victor Solntsev, who was affiliated with the Baumann Technical Institute in Moscow. Solntsev argues in light of external sources of electrical-chemical, gravitational, or acoustic energy waves which may impact a human body the human body must be viewed as an "open system, instead of simply as an organism or closed system."

Thomas summarizes Solntsev's findings as follows:

"One's physical environment, whether through electromagnetic, gravitational, acoustic, or other effects, can cause a change in the psycho-physiological condition of an organism."

Solntsev's argument motivates the paper: the human mind does not have a firewall which proactively detects malicious activity. The argument I am offering is there must be resiliency toward any type of malicious activity which can harm both Americans, specifically, and humans, generally. Failing to build capacity to intercept and deny attempts to harm Americans is not an option. Firewalls are not some abstract concept. A team in the United States has developed a device called a Cyber Shield to protect the body and the mind from malicious electromagnetic, vortex, or acoustic energy wave. The shield neutralizes "extremely low frequency" or ELF waves. Users report the results to be nothing short of remarkable.

The description of the Cyber Shield is as follows: "This is ELF/VLF/MW protective hardware. It helps to protect against neuro attacks such as forced focus, emotional manipulation and some physical attacks. It does not stop V2K, but does break the forced focus effects to allow it to be ignored so you can focus on what you need to do. It comes with 1 shield, 9 antennas, 2 power adapters, and 1 Touch Screen." The unit runs for $3,600, however the vendor does offer a way to pay over time for those who don't have the full amount immediately, but urgently need the security, protection and peace-of-mind offered by the Cyber Shield.

According to both Thomas and Russian army Major I. Chernishev, the development of "psy" weapons has been happening across militaries all over the world for several decades. During the course of this arms race microwave weapons have been designed to "heat up the body, induce epileptic-like seizures, or cause cardiac arrest," and systems for aiming low-frequency radiation at people have been constructed to affect "the electrical activity of the brain" and "cause flu-like symptoms and nausea."

At the end of his report, Thomas concludes "we need to spend more time researching how to protect the humans in our data management structures." In the worst case scenario, the new

range of weapons could cause bloodless death. According to Thomas, there are researchers in Russia and around the world who believe these 'psy' weapons "can be used to attack or steal from the data-processing unit of the human body," that is, the mind.

Just as America has fielded a capability to protect all Americans from nuclear armaments designed by other nations, an American national security strategy is incomplete without the capability to protect Americans from "psy," microwave, and extremely low frequency weapons. Without securing Americans from the existence of these weapons, Americans involved in keeping secrets might unwittingly divulge such confidential information as where nuclear warheads are stored. There is no chance America can risk such information leaking, hence why systems are required to ensure no American must experience the adverse impacts of hostile foreign countries attempting to harm Americans who have sensitive information.

As much as America needs to develop a national cyber shield, much the way Israel has developed the Iron Dome to protect their citizens from rocket fire, every human must be able to live with the peace and security of knowing nobody else is reading their thoughts. The right to practice one's faith without worrying about who is listening, for example, is at stake.

The National Academies of Sciences, Engineering, and Medicine weighed in on the experience of more than 1,000 US personnel in Cuba who experienced symptoms similar to traumatic brain injury, which are symptoms consistent with the intended effects of psy, microwave, ultra low frequency, electromagnetic, gravitational, and acoustic energy weapons. NASEM concluded in 2020 "directed, pulsed radio frequency energy appears to be the most plausible mechanism in explaining these cases."

Bibliography

1. 'The Mind Has No Firewall.' Timothy L. Thomas. Parameters 28, no. 1 (1998), doi:10.55540/0031-1723.1871. URL where you can download the PDF to read the report yourself: https://press.armywarcollege.edu/parameters/vol28/iss1/12/.

2. 'Cyber Shield.' URL: https://world-tek-shielding-survival-solutions.mybigcommerce.com/cyber-shield-elf-vlf-mw-protective-hardware/

3. 'New Report Assesses Illnesses Among U.S. Government Personnel and Their Families at Overseas Embassies.' National Academics of Sciences, Engineering and Medicine. December 5, 2020. URL: https://www.nationalacademies.org/news/2020/12/new-report-assesses-illnesses-among-us-government-personnel-and-their-families-at-overseas-embassies




const cleanText = (text) => {
    // Replace multiple spaces between lines with single space
    text = text.replace(/\n\s+/g, '\n');
    text.replaceAll('"',')
    // Trim leading and trailing whitespace
    text = text.trim()
    return text;
}

console.log(cleanText(words));