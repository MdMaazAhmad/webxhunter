import { Button } from "@/components/atom/Button";

export default function Hero() {
  return (
    <div className="container mx-auto ">
      <div className="lg:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 lg:gap-8 lg:rounded-lg items-start justify-end px-4 pb-10 lg:px-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCc_N1GxACIzHQZRR0u4EzPVPc-KTQRnVPsLoW-BKeHFb9m1-2RBGPh6m53p6JxzrOZBmE-zgCxcALWVER2CvMVvqC1qf0iM24jm30UV1kkYQRaJxCL8-hSZnKKzWDhALLkmiLeYZzwksM93Az2cpv1lw8eddfEw0BtfkUwFyagHvrXg2L17D5xOxKWmSOv4T0yxRmFzopEI-WjfNHhxkZ35sNF2hSTIFzyDUbliAsV7VR7rorEmpRjneXvc2F6GAyvSuhvZfEr6jE")`
          }}
        >
          <div className="flex flex-col gap-2 text-left max-w-4xl">
            <h1 className="text-white text-2xl md:text-4xl font-black leading-tight tracking-tight">
              Crafting Digital Experiences That Drive Success
            </h1>
            <p className="text-white text-xs md:text-sm font-normal leading-relaxed max-w-2xl opacity-90">
              We are a web service agency specializing in creating innovative
              and effective digital solutions for businesses of all sizes. From
              stunning website designs to comprehensive digital marketing
              strategies, we help you achieve your online goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              type="primary" 
              className="font-bold text-xs md:text-sm "
              bgColor="#0c7ff2"
            >
              Explore Our Services
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}