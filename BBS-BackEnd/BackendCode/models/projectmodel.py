from sqlalchemy import Column, Integer,String, ForeignKey
from sqlalchemy.orm import relationship
from config.db import Base

class Project(Base):
    __tablename__ = 'project'

    id = Column(Integer, primary_key=True,autoincrement=True)
    pname = Column(String(30), default='')
    ptype = Column(String(10), default='building')

    footing = relationship('Footing', back_populates='project')
    # def as_dict(self):
    #     return {column.name: getattr(self, column.name) for column in self.__table__.columns}





