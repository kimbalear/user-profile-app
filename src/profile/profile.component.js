import React from 'react';

import FormFields from '../layout/formFields.component';
import userProfileActions from './profile.actions';
import userProfileStore from './profile.store';


function EditProfile (props, context) {
    const fieldKeys = [
        'firstName',
        'surname',
        'email',
        'phoneNumber',
        'introduction',
        'jobTitle',
        'gender',
        'birthday',
        'nationality',
        'employer',
        'education',
        'interests',
        'languages',
    ];

    const pageLabel = context.d2.i18n.getTranslation('user_profile');

    return (
        <FormFields
            pageLabel={pageLabel}
            fieldKeys={fieldKeys}
            valueStore={userProfileStore}
            onUpdateField={userProfileActions.save}
        />
    );
}

EditProfile.contextTypes = { d2: React.PropTypes.object.isRequired };

export default EditProfile;
