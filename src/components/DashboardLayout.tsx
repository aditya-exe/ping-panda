import type { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import Heading from "./Heading";

interface IDashboardLayout {
  title: string;
  children?: ReactNode;
  hideBackButton?: boolean;
  cta?: ReactNode;
}

const DashboardLayout: FC<IDashboardLayout> = ({
  title,
  children,
  hideBackButton,
  cta,
}) => {
  return (
    <section className="flex flex-col flex-1 h-full w-full">
      <div className="p-6 md:p-8 flex justify-between border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-8">
          {hideBackButton ? null : (
            <Button className="w-fit bg-white" variant={"outline"}>
              <Icons.arrowLeft className="" />
            </Button>
          )}
          <Heading>{title}</Heading>
          {cta ? <div className="">{cta}</div> : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8 overflow-y-auto">
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;
