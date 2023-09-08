import secrets
import base64

class Color:
    GREEN = '\033[92m'
    RESET = '\033[0m'

key = secrets.token_bytes(64)

key_base64 = base64.urlsafe_b64encode(key).decode()

print(f"{Color.GREEN}Base64-encoded Key:{Color.RESET} {key_base64}")
