import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Hunter",
    role: "Founder & CEO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCc4X0MGdpDHFjPlEapMybbMojxIP1g9dZpt56JeQn4-tKU1weR0WR7_8LAAxhFD0PBnyHGo7DwLVzIaefVDDcyrMOu_62YKLEjj1u275m31f9KRb8Jd0eNfTQ37eG7mGJACOtlz2BvNtFxHCLYb3gBZdrnZhYG-5bb8mWoe68IP8XopZ0MvTwB5LW9lMjYLcvC5xguOSVgPpEfmkFQ4mBDDO4fXdP33_23ERjeLioHFXBH3t6-Q-t-gwVQM4jx36Dkt8qlZR7waA"
  },
  {
    id: 2,
    name: "David Lee",
    role: "Lead Developer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaLmoBcKSqZBITbirdT0a8wZBunUBXybtK-saOUkfW6M0REJbXxxyplqozoGr-XgNO_sKEReoSY0pMbFnF542pabs-AlIdMXQOBrkKkcgjjKrtFzCgV1ZwM-xbFVWl-U6r4L3NOSfCV9ZmEsEIfopufpOcpjoKtc_SHevUMGsdQB1Ofi_SwS0euvLZh4q9sH6LcqKak7JfxtI3mT-XPgH5_p88txIu6xY8urKO_LQjdKJg9aTPZEKVX5RQQNIQCjGzzwlFuDcEhRY"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Design Director",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdjd__Hk0gRFzTIxWQrBaQV_gKFqLTomhWSdRoeaq8G-q8NceU27biNNHO8qjRp6Q4CxbHNrPffxfmP2emVV5PLolBVuvVgPWqhIw-ybTZsTUujIPoLNUP_lcZc9WmcVydDuamNeSXaqh1cQVBwceO5IRga2NYEYRsRPUVCrmmegOa1LA29CyUDLLB-YQ-edbAId1TpIMNg0RsAOeznKk0UA03fji4UcOX1lkJXZNRSVQPmpoau6u5deZKXqrAl91Q1lbacy31t3s"
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Marketing Strategist",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyv_B2Qg-fqun2x1_3x5E2b7fhe9iKc1J9veLvHdEQ-1iOgWkwlJnRHrqgA_oZxx_wMNxa8sJ1Jn5sOFqyRAo40aSCxGPSfjjLWxByiSrxvzJNvGXqJBz43a74qvJTTkW7lGvxxTluaWjEm-X_5Xy-GDpwLbOGXVESYkSQ5WkxMBdaqCYJZYW8Pnm9c4IVdEvB3UQwt-wL5p2ZSiCSNziC1WacCGfzXRht5h10rIGebOhoUnoVlBcvrWEPgvq1B0TgMswRcjq6I_4"
  }
];

export default function Team() {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-8">
          Meet the Team
        </h2>
        
      

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4">
                <div
                  className="w-36 h-36 bg-center bg-no-repeat bg-cover rounded-full mx-auto"
                  style={{ backgroundImage: `url("${member.image}")` }}
                  role="img"
                  aria-label={`${member.name} - ${member.role}`}
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}