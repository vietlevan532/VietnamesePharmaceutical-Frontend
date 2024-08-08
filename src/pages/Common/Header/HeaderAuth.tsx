import './HeaderAuth.css';

interface HeaderAuthProps {
  title: string;
  path: string;
  change_form: string;
}

function HeaderAuth({ title, path, change_form }: HeaderAuthProps) {
  return (
    <div className="header-auth">
      <div className="header-auth-container">
        <div className="header-auth-logo">
          <a href="/">
            <span>.pharmacy</span>
            VN
          </a>
        </div>
        <div className="header-auth-fom-name">
          <h2 className="form-name">{title}</h2>
        </div>
        <div className="header-auth-support">
          <a href="/">Bạn cần giúp đỡ?</a>
          <span>|</span>
          <a href={path}>{change_form}</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderAuth;
