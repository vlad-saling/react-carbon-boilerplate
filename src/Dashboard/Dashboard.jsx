import React, { useState } from "react";
import {
  Button,
  Modal,
  TextInput,
  TextArea,
  Dropdown
} from "@carbon/react";
import cx from 'classnames';
import styles from './Dashboard.module.scss';

const Dashboard = props => {
  const [ modalOpen, setModalOpen ] = useState(false);

  return (
    <div className={styles.dashboard}>
      <h1>Welcome</h1>
      <div className={styles.dashboardContent}>
        <div className={styles.widget}>
          <h2>My positions</h2>
          <h3>3 <span>open positions</span></h3>
          <h3>5 <span>filled positions</span></h3>
          <div className={styles.actionButtons}>
            <Button onClick={() => setModalOpen(true)}>Add new position</Button>
            <Button kind="secondary">See my open positions</Button>
          </div>
        </div>

        <div className={styles.widget}>
          <h2>Candidates</h2>
          <h3>10 <span>candidates</span></h3>
          <div className={styles.actionButtons}>
            <Button>View matched candidates</Button>
          </div>
        </div>

        <div className={styles.widget}>
          <h2>Optional widget</h2>
          <div className={styles.actionButtons}>
            <Button>Action button</Button>
          </div>
        </div>

        <div className={styles.timeline}>
          <h2>Timeline</h2>
          <div className={styles.chart}>
            {/*  chart header*/}
            <div className={styles.chartHeader}>JAN 22</div>
            <div className={styles.chartHeader}>FEB 22</div>
            <div className={styles.chartHeader}>MAR 22</div>
            <div className={styles.chartHeader}>APR 22</div>
            <div className={styles.chartHeader}>MAY 22</div>
            <div className={styles.chartHeader}>JUN 22</div>
            <div className={styles.chartHeader}>JUL 22</div>
            <div className={styles.chartHeader}>AUG 22</div>
            <div className={styles.chartHeader}>SEP 22</div>
            <div className={styles.chartHeader}>OCT 22</div>
            <div className={styles.chartHeader}>NOV 22</div>
            <div className={styles.chartHeader}>DEC 22</div>

            {/*  chart content*/}

            <div className={cx([styles.jobBlock, styles.blockStartSEP, styles.blockEndDEC])}>
              Data analyst
            </div>

            <div className={cx([styles.jobBlock, styles.blockStartFEB, styles.blockEndAUG])}>
              Java developer
            </div>

            <div className={cx([styles.jobBlock, styles.blockStartFEB, styles.blockEndAUG])}>
              HR Specialist
            </div>

            <div className={cx([styles.jobBlock, styles.blockStartJAN, styles.blockEndFEB])}>
              Finance analyst
            </div>
          </div>
        </div>

      </div>

      <Modal
        open={modalOpen}
        modalHeading="Add new position"
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        onRequestClose={() => setModalOpen(false)}
        onRequestSubmit={() => setModalOpen(false)}
      >
        {/*// add form to add new position*/}
        <form className={styles.positionForm}>
          <TextInput
            id="positionTitle"
            type="text"
            labelText="Position title"
          />

          <TextArea
            id="positionDescription"
            type="text"
            labelText="Position description"
          />

          <TextInput
            id="positionLocation"
            type="text"
            labelText="Location"
          />

          <TextInput
            id="positionSkills"
            type="text"
            labelText="Skills"
          />

          <Dropdown
            id="default"
            titleText="Salary level"
            label="Select band"
            items={[
              {
                id: 'band2',
                text: 'Band 2'
              },
              {
                id: 'band3',
                text: 'Band 3'
              },
              {
                id: 'band4',
                text: 'Band 4'
              }
            ]}
            itemToString={(item) => (item ? item.text : '')}
          />

          <TextInput
            id="positionExperience"
            type="text"
            labelText="Experience"
          />

          <TextInput
            id="positionLanguages"
            type="text"
            labelText="Languages"
          />

          <TextInput
            id="positionContact"
            type="text"
            labelText="Contact"
          />

        </form>
      </Modal>
    </div>
  );
}

export default Dashboard;