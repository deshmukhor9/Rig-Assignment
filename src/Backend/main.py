from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow React app to access the FastAPI server
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

class UserProfile(BaseModel):
    name: str
    email: str
    dob: str
    countryCode: str
    contact: str

# Create an in-memory mock storage for the user profile
user_profile = {}

@app.post("/save_profile")
async def save_profile(profile: UserProfile):
    # Save the profile in the in-memory mock storage
    user_profile["name"] = profile.name
    user_profile["email"] = profile.email
    user_profile["dob"] = profile.dob
    user_profile["countryCode"] = profile.countryCode
    user_profile["contact"] = profile.contact

    return {"message": "Profile saved successfully!", "profile": profile}

@app.get("/get_profile")
async def get_profile():
    # Return the stored user profile
    if user_profile:
        return user_profile
    else:
        return {"message": "No profile found"}
