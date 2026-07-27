import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: 'user' | 'assistant';
  text: string;
  isTyping?: boolean;
}

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-assistant.html',
  styleUrl: './chat-assistant.css'
})
export class ChatAssistantComponent {
  @ViewChild('chatBody') private chatBody!: ElementRef;

  messages = signal<ChatMessage[]>([
    {
      sender: 'assistant',
      text: 'Hello! I am an interactive assistant trained on Fahrel Ardhan Assegaff\'s CV dataset. You can type your questions directly below or select popular topics. How can I help you today?'
    }
  ]);

  userInput = signal('');
  isTyping = signal(false);
  buttonsDisabled = signal(false);

  quickOptions = [
    'Technical Skills',
    '5 Featured Projects',
    'Work Experience',
    'WhatsApp & Email Contact'
  ];

  selectOption(optionText: string) {
    if (this.buttonsDisabled()) return;
    this.sendUserMessage(optionText);
  }

  onFormSubmit(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const text = this.userInput().trim();
    if (!text || this.buttonsDisabled()) return;

    this.userInput.set('');
    this.sendUserMessage(text);
  }

  private sendUserMessage(text: string) {
    this.buttonsDisabled.set(true);

    this.messages.update(prev => [...prev, { sender: 'user', text }]);
    this.scrollToBottom();

    setTimeout(() => {
      this.isTyping.set(true);
      this.scrollToBottom();
    }, 300);

    setTimeout(() => {
      this.isTyping.set(false);
      const reply = this.generateElizaReply(text);
      this.messages.update(prev => [...prev, { sender: 'assistant', text: reply }]);
      this.buttonsDisabled.set(false);
      this.scrollToBottom();
    }, 1000);
  }

  private generateElizaReply(query: string): string {
    const q = query.toLowerCase().trim();

    // 1. Greetings & Identity
    if (/(halo|hai|hi|hello|who are you|siapa|identity|about)/i.test(q)) {
      return "Hello! I am Fahrel Ardhan Assegaff's interactive assistant powered by an Eliza-inspired rule engine. I can answer questions regarding his technical skills (.NET, MAUI, Laravel, React, CodeIgniter), 5 major production projects, 4+ years work experience, education, or direct contact options.";
    }

    // 2. Technical Skills & Tech Stack
    if (/(skill|skills|keahlian|teknologi|tech|stack|framework|languages|\.net|maui|blazor|laravel|react|codeigniter|flutter|c\#|sql|rdlc|figma)/i.test(q)) {
      return "Fahrel's Key Technical Skills (4+ years experience):\n• Languages & Frameworks: .NET (MAUI, Blazor, C#), Laravel, React, CodeIgniter 3, Flutter, SQL.\n• Tools & Platforms: Figma, Microsoft Office 365, Git, RDLC Reports, REST APIs, Agile Scrum.\n• IT & Systems: Hardware troubleshooting, OS Installation, & System configuration.";
    }

    // 3. Featured Projects
    if (/(project|projects|proyek|portfolio|portofolio|forexpintar|unhan|defense|demoda|eienone|mitra seribu|scanwin|sku|pos|ecommerce)/i.test(q)) {
      return "Here are Fahrel's 5 major production projects:\n1. ForexPintar (2025): .NET MAUI mobile app & Blazor WebAssembly admin dashboard.\n2. UNHAN National Student Admission Portal (2025): High-concurrency online portal built with CodeIgniter 3.\n3. Demoda Azaprima (2025): Modern landing page & Laravel custom CMS.\n4. EienOne (2022-2024): Enterprise eCommerce platform, POS, & mobile app built with .NET, Blazor, & React.\n5. PT. Mitra Seribu Saudara (2026-Ongoing): SKU Admin CRUD module & ScanWin mobile scanner app optimization.";
    }

    // 4. Work Experience
    if (/(experience|pengalaman|career|work|history|mitra seribu|freelance|eienone|eco beringin|company)/i.test(q)) {
      return "Fahrel's Work Experience History:\n• Front-End MAUI .NET Developer at PT. Mitra Seribu Saudara (2026 – Ongoing): Building internal C# UI modules & optimizing ScanWin mobile scanner app.\n• Freelance Full-Stack & Mobile Developer (2025): Delivering full-time mobile apps, admin portals, & custom CMS solutions for diverse clients.\n• Full-Stack .NET Developer & IT Staff at EienOne (2022 – 2024): Engineering eCommerce, POS platforms, & leading enterprise M365 migration.\n• IT Intern at PT. Eco Beringin (2020): Hardware grading & OS configuration.";
    }

    // 5. Education & Certifications
    if (/(education|pendidikan|university|cyber asia|progate|bootcamp|yadika|school|degree)/i.test(q)) {
      return "Fahrel's Educational Background:\n• Bachelor of Information Systems at University of Cyber Asia (Ongoing)\n• Progate Frontend Bootcamp (React Frontend Development)\n• Yadika 3 Vocational School (Computer & Network Engineering).";
    }

    // 6. Recruitment / Hire / Freelance / Location
    if (/(hire|recruitment|opportunity|collaboration|freelance|contract|salary|location|remote|jakarta)/i.test(q)) {
      return "Fahrel is based in Jakarta, Indonesia and open for 2 types of collaboration:\n1. Full-Time / Hybrid roles as Full-Stack & Mobile Engineer (open for Jakarta or Remote).\n2. Freelance Projects / Contract work (cross-platform mobile apps, enterprise portals, custom CMS).\nFahrel operates comfortably in both remote and hybrid software team environments.";
    }

    // 7. Contact Info
    if (/(contact|kontak|reach|email|whatsapp|wa|linkedin|phone|resume|cv)/i.test(q)) {
      return "You can contact Fahrel directly via:\n• Email: fahrelardhanassegaff@gmail.com\n• WhatsApp: +62 857-7342-7134\n• LinkedIn: linkedin.com/in/fahrel-ardhan-assegaf-479180241";
    }

    // 8. Positive Remarks
    if (/(thank|thanks|terima kasih|ok|great|awesome|good)/i.test(q)) {
      return "You're welcome! Glad I could help. If you have any job opportunities or freelance projects to discuss, feel free to reach out via Email or WhatsApp!";
    }

    // 9. Fallback Reply
    return `I understand your query regarding "${query}". Based on Fahrel Ardhan Assegaff's CV dataset, you can ask about:\n• "What are Fahrel's technical skills?"\n• "Tell me about UNHAN or ForexPintar projects"\n• "Where has Fahrel worked?"\n• "How can I contact Fahrel via WhatsApp or Email?"`;
  }

  private scrollToBottom() {
    setTimeout(() => {
      try {
        const element = this.chatBody.nativeElement;
        element.scrollTo({
          top: element.scrollHeight,
          behavior: 'smooth'
        });
      } catch (err) {}
    }, 50);
  }
}
