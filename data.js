const migrationData = {
    corePagesRoutes: [
      { id: "C001", route: "/", status: "Done", notes: "Home page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C002", route: "/about-us", status: "Done", notes: "About Us page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C003", route: "/contact", status: "Done", notes: "Contact page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C004", route: "/careers", status: "Done", notes: "Careers page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C005", route: "/privacy-policy", status: "Done", notes: "Privacy Policy page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C006", route: "/whitepapers", status: "Done", notes: "Whitepapers page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C007", route: "/case-studies", status: "Done", notes: "Case Studies listing page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" },
      { id: "C008", route: "/404", status: "Done", notes: "404 Not Found page", assignedTo: "Manjusha, Leela, Murali, Kishan", deliveryDate: "Completed" }
    ],
    
    capabilityRoutes: [
      { id: "CP001", route: "/capability/cloud-native", status: "Pending", notes: "Cloud Native page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP002", route: "/capability/xops", status: "Pending", notes: "XOps page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP003", route: "/capability/cognitive-ai", status: "Pending", notes: "Cognitive AI page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP004", route: "/capability/generative-ai", status: "Pending", notes: "Generative AI page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP005", route: "/capability/business-intelligence", status: "Pending", notes: "Business Intelligence page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP006", route: "/capability/data-engineering-analytics", status: "Pending", notes: "Data Engineering & Analytics page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP007", route: "/capability/salesforce", status: "Pending", notes: "Salesforce page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP008", route: "/capability/quality-engineering", status: "Pending", notes: "Quality Engineering page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP009", route: "/capability/mobility-services", status: "Pending", notes: "Mobility Services page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP010", route: "/capability/technical-writing", status: "Pending", notes: "Technical Writing page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP011", route: "/capability/embedded-system", status: "Pending", notes: "Embedded System page", assignedTo: "Leela", deliveryDate: "22/04/2025" },
      { id: "CP012", route: "/capability/sap", status: "Pending", notes: "SAP page", assignedTo: "Leela", deliveryDate: "22/04/2025" }
    ],
    
    technologyRoutes: [
      { id: "T001", route: "/technology/aws", status: "Done", notes: "AWS Technology page", assignedTo: "Manjusha", deliveryDate: "Completed" },
      { id: "T002", route: "/technology/Gcp", status: "Pending", notes: "GCP Technology page", assignedTo: "Manjusha", deliveryDate: "22/04/2025" },
      { id: "T003", route: "/technology/Azure", status: "Done", notes: "Azure Technology page", assignedTo: "Manjusha", deliveryDate: "Completed" },
      { id: "T004", route: "/technology/Databricks", status: "Pending", notes: "Databricks Technology page", assignedTo: "Manjusha", deliveryDate: "22/04/2025" },
      { id: "T005", route: "/technology/Snowflake", status: "Pending", notes: "Snowflake Technology page", assignedTo: "Manjusha", deliveryDate: "22/04/2025" },
      { id: "T006", route: "/technology/Salesforce", status: "Pending", notes: "Salesforce Technology page", assignedTo: "Manjusha", deliveryDate: "22/04/2025" }
    ],
    
    awsServicesRoutes: [
      { id: "AWS001", route: "/aws/services/data-lake-implementation", status: "Pending", notes: "Data Lake Implementation page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS002", route: "/aws/services/database-migration", status: "Pending", notes: "Database Migration page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS003", route: "/aws/services/centralized-logging", status: "Pending", notes: "Centralized Logging page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS004", route: "/aws/services/genai", status: "Pending", notes: "AWS Generative AI page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS005", route: "/aws/services/real-time-iot-analytics", status: "Pending", notes: "Real-time IoT Analytics page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS006", route: "/aws/services/etl-modernization", status: "Pending", notes: "ETL Modernization page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS007", route: "/aws/services/real-time-data-streaming", status: "Pending", notes: "Real-time Data Streaming page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS008", route: "/aws/services/application-modernization", status: "Pending", notes: "Application Modernization page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS009", route: "/aws/services/devops", status: "Pending", notes: "DevOps page", assignedTo: "Murali", deliveryDate: "22/04/2025" },
      { id: "AWS010", route: "/aws/services/data-analytics", status: "Pending", notes: "Data Analytics Support page", assignedTo: "Murali", deliveryDate: "22/04/2025" }
    ],
    
    awsSdpRoutes: [
      { id: "SDP001", route: "/aws/sdp/aws-glue", status: "Pending", notes: "AWS Glue page", assignedTo: "Kishan", deliveryDate: "22/04/2025" },
      { id: "SDP002", route: "/aws/sdp/aws-opensearch", status: "Pending", notes: "AWS OpenSearch page", assignedTo: "Kishan", deliveryDate: "22/04/2025" },
      { id: "SDP003", route: "/aws/sdp/aws-dynamodb", status: "Pending", notes: "AWS DynamoDB page", assignedTo: "Kishan", deliveryDate: "22/04/2025" },
      { id: "SDP004", route: "/aws/sdp/aws-apigateway", status: "Pending", notes: "AWS API Gateway page", assignedTo: "Kishan", deliveryDate: "22/04/2025" },
      { id: "SDP005", route: "/aws/sdp/aws-rds", status: "Pending", notes: "AWS RDS page", assignedTo: "Kishan", deliveryDate: "22/04/2025" },
      { id: "SDP006", route: "/aws/sdp/aws-lambda", status: "Pending", notes: "AWS Lambda page", assignedTo: "Kishan", deliveryDate: "22/04/2025" }
    ],
    
    productRoutes: [
      { id: "PRD001", route: "/product/observability-accelerator", status: "Pending", notes: "Observability Accelerator product page", assignedTo: "Tarun", deliveryDate: "22/04/2025" }
    ],
    
    caseStudyRoutes: [
      { id: "CS001", route: "/case-study/A-leading-IoT-Solution-Provider-scaled-their-vibration-based-sensor-analytics-solution", status: "Pending", notes: "Was formerly `/case-study/kcf`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS002", route: "/case-study/ad-streaming-analytics", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS003", route: "/case-study/agile-devops-framework", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS004", route: "/case-study/Analytics-Solution-for-Leading-Automotive-Manufacturer", status: "Pending", notes: "Was formerly `/case-study/Hyundai-KinetIQ`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS005", route: "/case-study/architecture-assessment", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS006", route: "/case-study/cmms-integration-system", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS007", route: "/case-study/Content-Creation-for-Exam-Preparation-Apps", status: "Pending", notes: "Was formerly `/case-study/gentoo`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS008", route: "/case-study/content-knowledge-graph", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS009", route: "/case-study/data-analytics-pipeline", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS010", route: "/case-study/data-quality-pipeline", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS011", route: "/case-study/DevOps-Implementation-for-Genie-HealthCare", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS012", route: "/case-study/digital-marketing-gentoolabs", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS013", route: "/case-study/digital-marketing-iguroo", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS014", route: "/case-study/dynamodb-stream-triggers", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS015", route: "/case-study/Excellence-with-Goods-Tracking-Mobile-App", status: "Pending", notes: "Was formerly `/case-study/fleetup`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS016", route: "/case-study/gcp", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS017", route: "/case-study/iguroo-data-analytics", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS018", route: "/case-study/iguroo-devops", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS019", route: "/case-study/IoT-platform-adoption-and-migration", status: "Pending", notes: "Was formerly `/case-study/aws-iot-platform-vertical-farming-rapid-production-scaling`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS020", route: "/case-study/Looker-Powered-Analytics-Solution", status: "Pending", notes: "Was formerly `/case-study/hbo`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS021", route: "/case-study/Mobile-Test-Automation-for-Leading-Machine-Health-Monitoring-Solutions-Provider", status: "Pending", notes: "Was formerly `/case-study/mobile-test-automation`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS022", route: "/case-study/Optimizing-Performance-for-Global-Leader-in-Visibility-and-Safety-Technologies", status: "Pending", notes: "Was formerly `/case-study/clariance-technologies`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS023", route: "/case-study/Personalized-Learning-Gets-Smarter-with-AI-powered-Solution", status: "Pending", notes: "Was formerly `/case-study/iguroo`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS024", route: "/case-study/powering-iguroo-edtech-dream", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS025", route: "/case-study/Revolutionizing-Quote", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS026", route: "/case-study/Salesforce-Managed-Commerce-Cloud-Solutions", status: "Pending", notes: "Was formerly `/case-study/Empowering-Retail-Excellence`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS027", route: "/case-study/Salesforce-Managed-Services-for-Automotive-Infotainment", status: "Pending", notes: "Was formerly `/case-study/Automotive-Infotainment`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS028", route: "/case-study/Salesforce-Managed-Services-for-Premier-Flooring-Retailer", status: "Pending", notes: "Was formerly `/case-study/salesforce`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS029", route: "/case-study/Salesforce-Managed-SFRA-Solution", status: "Pending", notes: "Was formerly `/case-study/Unlocking-Convenience`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS030", route: "/case-study/scalable-devops-infrastructure", status: "Pending", notes: "Direct migration", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS031", route: "/case-study/Software-defined-Vehicle-Infrastructure-for-an-Auto-Manufacturer", status: "Pending", notes: "Was formerly `/case-study/gm`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS032", route: "/case-study/Streamlining-Lead-to-Order-Process-with-Salesforce-Managed-Services", status: "Pending", notes: "Was formerly `/case-study/salesforce-management-system`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS033", route: "/case-study/test-automation-framework-for-streaming-data", status: "Pending", notes: "Was formerly `/case-study/streaming-data`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS034", route: "/case-study/The-KCF-Machine-Health-Platform", status: "Pending", notes: "Was formerly `/case-study/kcf-case`", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "CS035", route: "/case-study/Transforming-Exam-Preparation-with-Gentoo-Labs", status: "Pending", notes: "Was formerly `/case-study/gentoolabs`", assignedTo: "Tarun", deliveryDate: "22/04/2025" }
    ],
    
    redirectsRoutes: [
      { id: "R001", route: "/services/cloud-native", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R002", route: "/services/xops", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R003", route: "/services/salesforce", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R004", route: "/services/technical-writing", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R005", route: "/services/cognitive-ai", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R006", route: "/services/generative-ai", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R007", route: "/services/quality-engineering", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R008", route: "/services/embedded-system", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R009", route: "/services/business-Intelligence", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R010", route: "/services/data-engineering", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R011", route: "/services/mobility-services", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R012", route: "/services/sap", status: "Pending", notes: "Capability redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R013", route: "/cloud-technology/aws", status: "Pending", notes: "Technology redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R014", route: "/cloud-technology/gcp", status: "Pending", notes: "Technology redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R015", route: "/cloud-technology/azure", status: "Pending", notes: "Technology redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R016", route: "/cloud-technology/databricks", status: "Pending", notes: "Technology redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R017", route: "/cloud-technology/snowflake", status: "Pending", notes: "Technology redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R018", route: "/cloud-technology/salesforce", status: "Pending", notes: "Technology redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R019", route: "/contact-us", status: "Pending", notes: "Core page redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R020", route: "/case-study/iguroo", status: "Pending", notes: "Case study redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R021", route: "/case-study/gentoo", status: "Pending", notes: "Case study redirect", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" },
      { id: "R022", route: "/:path*.html", status: "Pending", notes: "HTML extension handler", assignedTo: "Team as they develop", deliveryDate: "22/04/2025" }
    ],
    
    specialHandlersRoutes: [
      { id: "H002", route: "Scroll to Top Behavior", status: "Pending", notes: "Reset scroll position on page navigation", assignedTo: "Tarun", deliveryDate: "22/04/2025" },
      { id: "H003", route: "Cookie Notice/Banner", status: "Pending", notes: "Implement cookie acceptance functionality", assignedTo: "Tarun", deliveryDate: "22/04/2025" }
    ],
    
    teamMembers: [
      { name: "Manjusha", tasks: 14, completed: 4, pending: 10 },
      { name: "Leela", tasks: 20, completed: 8, pending: 12 },
      { name: "Murali", tasks: 18, completed: 8, pending: 10 },
      { name: "Kishan", tasks: 14, completed: 14, pending: 0 },
      { name: "Tarun", tasks: 39, completed: 0, pending: 39 },
      { name: "Team as they develop", tasks: 22, completed: 0, pending: 22 }
    ]
  };
