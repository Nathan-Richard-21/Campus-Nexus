import React from 'react';
import { PersonalDetailsChange } from './types';

interface PersonalDetailsChangeSectionProps {
  personalDetailsChange: PersonalDetailsChange;
  setPersonalDetailsChange: React.Dispatch<React.SetStateAction<PersonalDetailsChange>>;
}

const PersonalDetailsChangeSection: React.FC<PersonalDetailsChangeSectionProps> = ({
  personalDetailsChange,
  setPersonalDetailsChange,
}) => {
  const handleSimpleChange = (field: keyof PersonalDetailsChange, value: string) => {
    setPersonalDetailsChange({
      ...personalDetailsChange,
      [field]: value,
    });
  };

  const handleAddressTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalDetailsChange({
      ...personalDetailsChange,
      changeAddress: e.target.checked,
    });
  };

  const handleAddressChange = (addressType: 'postalAddress' | 'accountDetails' | 'studyAddress' | 'nextOfKinAddress', field: string, value: string) => {
    setPersonalDetailsChange({
      ...personalDetailsChange,
      [addressType]: {
        ...personalDetailsChange[addressType],
        [field]: value,
      },
    });
  };

  return (
    <div className="form-section personal-details-change-section">
      <h3>SECTION E: CHANGE OF PERSONAL DETAILS</h3>
      <p className="section-note">(CHANGE OF NAME OR INCORRECT DETAILS)</p>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="newSurname">NEW SURNAME</label>
          <input
            type="text"
            id="newSurname"
            value={personalDetailsChange.newSurname || ''}
            onChange={(e) => handleSimpleChange('newSurname', e.target.value)}
            placeholder="Enter new surname (if applicable)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="newName">NEW NAME</label>
          <input
            type="text"
            id="newName"
            value={personalDetailsChange.newName || ''}
            onChange={(e) => handleSimpleChange('newName', e.target.value)}
            placeholder="Enter new name (if applicable)"
          />
        </div>
      </div>
      
      <div className="form-group full-width">
        <label htmlFor="newIdNo">NEW ID NO</label>
        <input
          type="text"
          id="newIdNo"
          value={personalDetailsChange.newIdNo || ''}
          onChange={(e) => handleSimpleChange('newIdNo', e.target.value)}
          placeholder="Enter new ID number (if applicable)"
        />
      </div>
      
      <div className="form-group full-width">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={personalDetailsChange.changeAddress || false}
            onChange={handleAddressTypeChange}
          />
          CHANGE OF ADDRESS
        </label>
      </div>
      
      {personalDetailsChange.changeAddress && (
        <div className="address-sections">
          <div className="address-section">
            <h4>POSTAL ADDRESS</h4>
            <div className="form-row">
              <div className="form-group full-width">
                <label>ADDRESS</label>
                <textarea
                  value={personalDetailsChange.postalAddress?.address || ''}
                  onChange={(e) => handleAddressChange('postalAddress', 'address', e.target.value)}
                  placeholder="Enter postal address"
                  rows={2}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>POSTAL CODE</label>
                <input
                  type="text"
                  value={personalDetailsChange.postalAddress?.code || ''}
                  onChange={(e) => handleAddressChange('postalAddress', 'code', e.target.value)}
                  placeholder="Enter postal code"
                />
              </div>
              <div className="form-group">
                <label>CONTACT</label>
                <input
                  type="text"
                  value={personalDetailsChange.postalAddress?.contact || ''}
                  onChange={(e) => handleAddressChange('postalAddress', 'contact', e.target.value)}
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>
          
          <div className="address-section">
            <h4>ACCOUNT DETAILS</h4>
            <div className="form-row">
              <div className="form-group full-width">
                <label>DETAILS</label>
                <textarea
                  value={personalDetailsChange.accountDetails?.details || ''}
                  onChange={(e) => handleAddressChange('accountDetails', 'details', e.target.value)}
                  placeholder="Enter account details"
                  rows={2}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>CODE</label>
                <input
                  type="text"
                  value={personalDetailsChange.accountDetails?.code || ''}
                  onChange={(e) => handleAddressChange('accountDetails', 'code', e.target.value)}
                  placeholder="Enter code"
                />
              </div>
              <div className="form-group">
                <label>CONTACT</label>
                <input
                  type="text"
                  value={personalDetailsChange.accountDetails?.contact || ''}
                  onChange={(e) => handleAddressChange('accountDetails', 'contact', e.target.value)}
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>
          
          <div className="address-section">
            <h4>STUDY ADDRESS</h4>
            <div className="form-row">
              <div className="form-group full-width">
                <label>ADDRESS</label>
                <textarea
                  value={personalDetailsChange.studyAddress?.address || ''}
                  onChange={(e) => handleAddressChange('studyAddress', 'address', e.target.value)}
                  placeholder="Enter study address"
                  rows={2}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>CODE</label>
                <input
                  type="text"
                  value={personalDetailsChange.studyAddress?.code || ''}
                  onChange={(e) => handleAddressChange('studyAddress', 'code', e.target.value)}
                  placeholder="Enter code"
                />
              </div>
              <div className="form-group">
                <label>CONTACT</label>
                <input
                  type="text"
                  value={personalDetailsChange.studyAddress?.contact || ''}
                  onChange={(e) => handleAddressChange('studyAddress', 'contact', e.target.value)}
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>
          
          <div className="address-section">
            <h4>NEXT OF KIN ADDRESS</h4>
            <div className="form-row">
              <div className="form-group full-width">
                <label>ADDRESS</label>
                <textarea
                  value={personalDetailsChange.nextOfKinAddress?.address || ''}
                  onChange={(e) => handleAddressChange('nextOfKinAddress', 'address', e.target.value)}
                  placeholder="Enter next of kin address"
                  rows={2}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>CODE</label>
                <input
                  type="text"
                  value={personalDetailsChange.nextOfKinAddress?.code || ''}
                  onChange={(e) => handleAddressChange('nextOfKinAddress', 'code', e.target.value)}
                  placeholder="Enter code"
                />
              </div>
              <div className="form-group">
                <label>CONTACT</label>
                <input
                  type="text"
                  value={personalDetailsChange.nextOfKinAddress?.contact || ''}
                  onChange={(e) => handleAddressChange('nextOfKinAddress', 'contact', e.target.value)}
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalDetailsChangeSection;
