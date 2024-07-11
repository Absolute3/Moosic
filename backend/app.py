from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel

app = FastAPI(strict_type = True)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

class InputQuery(BaseModel):
    keyword: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post('/search')
def search(input:InputQuery):
    # write async code to call search api's
    return


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port = 3003)