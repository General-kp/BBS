
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from requests import Session
from config.db import get_db
from models.projectmodel import Project
from schemas.projectSchema import AbstractResponseModel, AddProjectInModel,FetchResponseModel1

router = APIRouter(prefix='/project')

@router.post('/add/',response_model=AbstractResponseModel)
def AddProject(item:AddProjectInModel,db: Session = Depends(get_db)):
    try:
        db_item = Project(pname=item.pname,ptype=item.ptype)
        db.add(db_item)
        db.commit()
        db.refresh(db_item)
        return JSONResponse(status_code=200,content={"message":"Insertion succesfull"})
    except Exception as e:
        print(e)
        return JSONResponse(status_code=500,content={"message":"Insertion failed"})

@router.get('/list/',response_model=FetchResponseModel1)
def FetchProjectList(db:Session = Depends(get_db)):
    try:
        db_item = db.query(Project).all()
        project_dicts = [{"pname":item.pname,"ptype":item.ptype} for item in db_item]
        return JSONResponse(status_code=200,content={"message":"Fetch succesfull","data":project_dicts})
    except Exception as e:
        return JSONResponse(status_code=500,content={"message":"Fetch operation failed"})
