// components
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="py-12 bg-footer">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/80 text-[20px] hover:text-white dark:hover:text-primary"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
