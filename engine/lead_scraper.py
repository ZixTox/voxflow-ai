import time
import json

def scrape_youtube_channels(niche="Tech", min_subs=50000, max_subs=300000):
    print(f"[*] Скрапінг YouTube каналів у ніші: {niche} ({min_subs}-{max_subs} subs)...")
    time.sleep(1)
    
    # Mock data
    mock_leads = [
        {"name": "Tech Reviews Daily", "url": "https://youtube.com/@techreviewsdaily", "subs": 120000, "email": "contact@techreviewsdaily.com"},
        {"name": "Code With AI", "url": "https://youtube.com/@codewithai", "subs": 85000, "email": "business@codewithai.dev"},
        {"name": "Gadget Master", "url": "https://youtube.com/@gadgetmaster", "subs": 210000, "email": "sponsor@gadgetmaster.net"}
    ]
    
    print(f"[+] Знайдено {len(mock_leads)} лідів.")
    return mock_leads

if __name__ == "__main__":
    leads = scrape_youtube_channels()
    with open("leads.json", "w", encoding="utf-8") as f:
        json.dump(leads, f, indent=4)
    print("[*] Ліди збережено у leads.json")
