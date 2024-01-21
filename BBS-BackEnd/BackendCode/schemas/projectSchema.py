from typing import Dict, List
from pydantic import BaseModel

class AbstractResponseModel(BaseModel):
    message:str

class AddProjectInModel(BaseModel):
    pname :str
    ptype :str

class AddComponentInModel(BaseModel):
    cname :str

class FetchResponseModel1(BaseModel):
    message: str
    data :List[Dict]
