import json
from math import ceil, floor
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from requests import Session
from config.db import get_db
from models.componentmodel import Footing
from models.projectmodel import Project
from schemas.footingSchema import ComponentAddResponseModel, ComponentAddResquestModel
from sqlalchemy.orm import attributes

router = APIRouter(prefix='/footing')

@router.post('/add/',response_model=ComponentAddResponseModel)
def AddFootingComponent(item:ComponentAddResquestModel,db: Session = Depends(get_db)):
    try:
        if item.location == "x-direction":
            b=item.lengthx-(2*50)
            a = c = 2*9*item.diameter
            no_of_bars = floor(((item.lengthy)/item.spacing))+1
            cutting_length = ((b)+a)/1000
            total_length = round((no_of_bars*cutting_length*8),2)
            unit_weight = round((((item.diameter)*(item.diameter))/(162)),2)
            total_weight = (total_length)*unit_weight
            result = db.query(Project.id).filter_by(pname=item.pname).first()
            db_item = Footing(
                location = item.location,
                footingid = item.footingid,
                barmark = item.barmark,
                diameter = item.diameter,
                spacing = item.spacing,
                length = item.lengthx,
                a = a,
                b = b,
                c = c,
                no_of_bars = no_of_bars,
                cutting_length = cutting_length,
                total_length = total_length,
                unit_weight = unit_weight,
                total_weight = total_weight,
                pid = result.id
                )
            db.add(db_item)
            db.commit()
            db.refresh(db_item)
            data = {
                "location":db_item.location,
                "footingid" : db_item.footingid,
                "barmark" : db_item.barmark,
                "diameter" : db_item.diameter,
                "spacing" :db_item.spacing,
                "length" : db_item.length,
                "a" : db_item.a,
                "b" : db_item.b,
                "c" :db_item.c,
                "no_of_bars" : no_of_bars,
                "cutting_length" : cutting_length,
                "total_length" : total_length,
                "unit_weight" : unit_weight,
                "total_weight" : total_weight,
                "pid" : result.id
            }
        else:
            b=item.lengthy-(2*50)
            a = c = 2*9*item.diameter
            no_of_bars = floor(((item.lengthx)/item.spacing))+1 #total length /spacing
            cutting_length = ((b)+a)/1000
            total_length = round((no_of_bars*cutting_length*8),2)#single bar
            unit_weight = round((((item.diameter)*(item.diameter))/(162)),2)
            total_weight = (total_length)*unit_weight
            result = db.query(Project.id).filter_by(pname=item.pname).first()
            db_item = Footing(
                location = item.location,
                footingid = item.footingid,
                barmark = item.barmark,
                diameter = item.diameter,
                spacing = item.spacing,
                length = item.lengthy,
                a = a,
                b = b,
                c = c,
                no_of_bars = no_of_bars,
                cutting_length = cutting_length,
                total_length = total_length,
                unit_weight = unit_weight,
                total_weight = total_weight,
                pid = result.id
                )
            db.add(db_item)
            db.commit()
            db.refresh(db_item)
            data = {
                "location":db_item.location,
                "footingid" : db_item.footingid,
                "barmark" : db_item.barmark,
                "diameter" : db_item.diameter,
                "spacing" :db_item.spacing,
                "length" : db_item.length,
                "a" : db_item.a,
                "b" : db_item.b,
                "c" :db_item.c,
                "no_of_bars" : no_of_bars,
                "cutting_length" : cutting_length,
                "total_length" : total_length,
                "unit_weight" : unit_weight,
                "total_weight" : total_weight,
                "pid" : result.id
            }
        return JSONResponse(status_code=200,content={"message":"Component succesfully added","data":data})
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,content={"message":"Component was not added"})