import './Header.css';

interface ContainerProps { }

const Header: React.FC<ContainerProps> = () => {
  return (
    <div className="header">
      <p>Start with Ionic
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a>
      </p>
    </div>
  );
};

export default Header;
