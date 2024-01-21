from sqlalchemy import Column, Float, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from config.db import Base
from models.projectmodel import Project

class Footing(Base):
    __tablename__ = 'footing'

    id = Column(Integer, primary_key=True,autoincrement=True)
    location = Column(String(30), default='x-direction')
    footingid = Column(String(30), default='')
    barmark = Column(String(20), default='')
    diameter = Column(Float, nullable=False)
    spacing = Column(Float, nullable=False)
    length =Column(Float, nullable=False)
    a = Column(Float, nullable=False)
    b = Column(Float, nullable=False,default=0)
    c = Column(Float, nullable=False)
    no_of_bars = Column(Float, nullable=False)
    cutting_length = Column(Float, nullable=False)
    total_length = Column(Float, nullable=False)
    unit_weight = Column(Float, nullable=False)
    total_weight = Column(Float, nullable=False)
    pid = Column(Integer, ForeignKey('project.id'), nullable=False)
    project = relationship('Project', back_populates='footing')
    def as_dict(self):
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}




