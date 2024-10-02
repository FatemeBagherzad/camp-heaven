import './UserAccount.scss';
import TopNav from '../../components/TopNav/TopNav';
import LeftNav from '../../components/LeftNav/LeftNav';
import Account from '../../components/Account/Account';

const UserAccount = () => {
  return (
    <>
      <div className="userAccount">
        <TopNav />
        <div className="userAccount__body">
          <LeftNav />
          <div className="userAccount__body-main">
            <Account />
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAccount;
