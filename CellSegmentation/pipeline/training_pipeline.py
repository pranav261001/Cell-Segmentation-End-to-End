import os
import sys
from CellSegmentation.logger import logging
from CellSegmentation.exception import AppException

from CellSegmentation.components.data_ingestion import DataIngestion
from CellSegmentation.components.data_validation import DataValidation

from CellSegmentation.entity.config_entity import (DataIngestionConfig,DataValidationConfig)
from CellSegmentation.entity.artifacts_entity import (DataIngestionArtifact, DataValidationArtifact)

class TrainPipeline:
    def __init__(self):
        self.data_ingestion_config = DataIngestionConfig()
        self.data_validation_config = DataValidationConfig( )

    def start_data_ingetsion(self)-> DataIngestionArtifact:
        try:
            logging.info("Entered the start_data_ingestion method of Trainpipeline class")

            logging.info("Getting the Data from URL")

            data_ingestion = DataIngestion(
                data_ingestion_config = self.data_ingestion_config
            )

            data_ingestion_artifact = data_ingestion.initiate_data_ingestion()
            logging.info("Got the data from url")
            logging.info("Exited the start_data_ingestion from TrainPipeline Class")

            return data_ingestion_artifact
        
        except Exception as e:
            raise AppException (e, sys)
    
    def start_data_validation(self, data_ingestion_artifact: DataIngestionArtifact
    )-> DataValidationArtifact:
        logging.info("Entered the start data validation class method of Training pipeline")

        try:
            data_validation = DataValidation(
                data_ingestion_artifact = data_ingestion_artifact,
                data_validation_config = self.data_validation_config, 
            ) 

            data_validation_artifact = data_validation.initiate_data_validation()

            logging.info("Performed Data Validation Operation")
            logging.info("Exited the start_data_validation method of training class")

            return data_validation_artifact
        except Exception as e:
            raise AppException(e, sys) from e

        
    def run_pipeline(self):
        try:
            data_ingestion_artifact = self.start_data_ingetsion()
            data_validation_artifact = self.start_data_validation(
                data_ingestion_artifact = data_ingestion_artifact
            )
                
        
        except Exception as e:
            raise AppException(e, sys)


