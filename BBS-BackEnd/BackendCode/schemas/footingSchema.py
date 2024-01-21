from typing import Dict
from pydantic import BaseModel

class ComponentAddResquestModel(BaseModel):
    pname:str
    location:str
    footingid:str
    barmark:str
    diameter:float
    spacing:float
    lengthx:float
    lengthy:float


class NestedAttributesModel(BaseModel):
    location:str
    footingid:str
    barmark:str
    diameter:float
    spacing:float
    length:float
    a:float
    b:float
    c:float
    no_of_bars:float
    cutting_length:float
    total_length:float
    unit_weight:float
    total_weight:float

class ComponentAddResponseModel(BaseModel):
    message:str
    data:Dict[str,NestedAttributesModel]


