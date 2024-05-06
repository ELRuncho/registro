import boto3

# Set cloudFormation client
cfn_client = boto3.client('cloudformation')

# specify the path to the template
template_path = 'registrobackend/main.yml'

# read the template file
with open(template_path, 'r') as template_file:
    template_body = template_file.read()

# create a cfn stack
response = cfn_client.create_stack(
    StackName='registrobackend',
    TemplateBody=template_body,
    Capabilities=['CAPABILITY_NAMED_IAM']
)

print(f"Stack creation response: {response['StackId']}")

