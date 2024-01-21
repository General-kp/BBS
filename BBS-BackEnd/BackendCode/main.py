from typing import Union

from fastapi import Depends, FastAPI
from requests import Session
from routers import footingRouter, projectRouter

from config.db import get_db

app = FastAPI()
app.include_router(projectRouter.router)
app.include_router(footingRouter.router)

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    return {"Hello": "World"}


@app.get("/items/{item_id}}/{q}")
def read_item(item_id: int, q: Union[str, None] = None,db: Session = Depends(get_db)):
    return {"item_id": item_id, "q": q}