import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StackPanel = ({ title, icon, message }) => {
  return (
    <ExpansionPanel defaultExpanded className="expansionPanel">
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="panelTitle">
          <img src={icon} alt={icon} />
          <h4>{title}</h4>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="stackIcons">
        <ul>
          {message.map((items, idx) => {
            const { img, url, title, alt } = items;
            return (
              <li key={idx} className="panelMessage">
                <a href={url} target="_blank" rel="noopener" aria-label={title}>
                  {title === 'styled-components' ? (
                    <Img
                      fluid={img}
                      title={title}
                      alt={alt}
                      style={{ height: '50px', width: '50px' }}
                    />
                  ) : (
                    <img src={img} title={title} alt={alt} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default StackPanel;
