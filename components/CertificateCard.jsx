import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const CertificateCard = ({ certificate }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[200px] lg:h-[450px] mx-auto flex items-center justify-center bg-tertiary dark:bg-secondary/10">
          <Image
            className="absolute mx-auto"
            src={certificate.image}
            fill
            alt=""
            priority
          />
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {certificate.category}
        </Badge>
        <h4 className="h4 mb-1">{certificate.name}</h4>
        <p className="text-muted-foreground text-lg">
          {certificate.description}
        </p>
      </div>
    </Card>
  );
};

export default CertificateCard;
