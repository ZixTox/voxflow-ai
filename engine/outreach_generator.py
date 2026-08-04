import json

def generate_outreach_email(lead):
    """
    Використовує AI для генерації листа на основі даних ліда.
    """
    name = lead.get("name")
    
    template = f"""
Subject: I translated {name}'s video into Spanish with your OWN voice (Demo)

Hi {name} team,

I loved your recent videos. The Spanish market is booming right now for tech channels.

I used AI voice-cloning to translate 30 seconds of your latest video into Spanish — it literally sounds like the creator speaking Spanish: [Link to Demo]

We can auto-translate your whole channel and set up a Spanish channel that brings you extra revenue on autopilot, with zero effort on your side. 

Interested in seeing how much you could earn?

Best,
VoxFlow AI Team
"""
    return template.strip()

if __name__ == "__main__":
    try:
        with open("leads.json", "r", encoding="utf-8") as f:
            leads = json.load(f)
            
        print("=== ГЕНЕРАЦІЯ ХОЛОДНИХ ЛИСТІВ ===")
        for lead in leads:
            print("-" * 40)
            print(f"To: {lead['email']}")
            print(generate_outreach_email(lead))
            print("-" * 40)
    except FileNotFoundError:
        print("leads.json не знайдено. Спочатку запустіть lead_scraper.py")
