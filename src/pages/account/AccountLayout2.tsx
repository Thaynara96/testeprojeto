import React from 'react';

type AccountLayout2Props = {
    children: React.ReactNode;
    bottomLinks?: React.ReactNode;
};

const AccountLayout2: React.FC<AccountLayout2Props> = ({ children, bottomLinks }) => {
    return (
        <div className="account-layout" style={{ minHeight: '100vh', backgroundColor: '#001F54', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="account-card p-4 rounded bg-white shadow-lg">
                {children}
                {bottomLinks}
            </div>
        </div>
    );
};

export default AccountLayout2;
