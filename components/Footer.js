import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__logo">
        <Image src="/img/logo.png" alt="독도 로고" width={180} height={101} />
      </div>
      <div className="container footer__inner">
        <p>교육 및 정보 제공 목적으로 제작되었습니다.</p>
        <p>&copy; 2026 DoKSH. All rights reserved.</p>
      </div>
    </footer>
  );
}
