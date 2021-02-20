from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _

from .models import Book, Checkout, Comment
from users.serializers import ShortUserSerializer

class BookSerializer(serializers.ModelSerializer):

    owner = ShortUserSerializer(required=False, allow_null=True)

    class Meta:
        model=Book
        fields = ('id', 'title', 'author', 'location', 'owner', 'status')
    
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(BookSerializer, self).__init__(*args, **kwargs)

    def validate(self, attrs):
        title = attrs.get('title')
        author = attrs.get('author')
        owner = self.request.user

        try:
            obj = Book.objects.get(title=title, author=author, owner=owner)
        except:
            return attrs

        if obj:
            raise serializers.ValidationError(_("title, author, and owner combination already exists"), code="validation")
            

    def create(self, validated_data):
        book = Book(
                title=validated_data['title'],
                author=validated_data['author'],
                location=validated_data['location'],
                owner=self.request.user,
                status=validated_data['status'],
            )
        book.save()
    
    def update(self, instance, validated_data):
        title = validated_data.pop('title', None)
        author = validated_data.pop('author', None)
        location = validated_data.pop('location', None)
        status = validated_data.pop('status', None)

        if title is not None:
            instance.title = title
        
        if author is not None:
            instance.author = author

        if location is not None:
            instance.location = location
        
        if status is not None:
            instance.status = status

        instance.save()
        return instance

    def save(self, **kwargs):
        validated_data = dict(
            list(self.validated_data.items()) +
            list(kwargs.items())
        )

        if self.instance is not None:
            self.instance = self.update(self.instance, validated_data)
        else:
            self.instance = self.create(validated_data)
            
        return self.instance

class CheckoutSerializer(serializers.ModelSerializer):
    
    book = BookSerializer(required=False, allow_null=True)
    checked_out_by = ShortUserSerializer(required=False, allow_null=True)

    class Meta:
        model=Checkout
        fields = ('id', 'book', 'checked_out_by', 'checked_out_date', 'returned_date')
    
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)
        return super(CheckoutSerializer, self).__init__(*args, **kwargs)

    def create(self, validated_data):
        import pdb; pdb.set_trace()
        pass
        # checkout = Checkout(
        #         title=validated_data['title'],
        #         author=validated_data['author'],
        #         location=validated_data['location'],
        #         checked_out_by=self.request.user,
        #     )
        # checkout.save()
    
    def update(self, instance, validated_data):
        pass
        # title = validated_data.pop('title', None)
        # author = validated_data.pop('author', None)
        # location = validated_data.pop('location', None)
        # status = validated_data.pop('status', None)

        # if title is not None:
        #     instance.title = title
        
        # if author is not None:
        #     instance.author = author

        # if location is not None:
        #     instance.location = location
        
        # if status is not None:
        #     instance.status = status

        # instance.save()
        # return instance

    def save(self, **kwargs):
        validated_data = dict(
            list(self.validated_data.items()) +
            list(kwargs.items())
        )

        if self.instance is not None:
            self.instance = self.update(self.instance, validated_data)
        else:
            self.instance = self.create(validated_data)
            
        return self.instance
# class PlanSerializer(serializers.ModelSerializer):
#     """ plan serializer
#     """
#     class Meta:
#         model = Plan
#         fields = (
#             'id',
#             'name',
#             'amount',
#             'term',
#             'monthly_ammort',
#             'payment_count',
#             'date_from',
#             'date_to',
#             'date_created',
#             'date_updated'
#         )

# class PayrollSerializer(serializers.ModelSerializer):
#     """ payroll serializer
#     """
#     user = UserSerializer()
#     total_deduction = serializers.SerializerMethodField(read_only=True)
#     gross_pay = serializers.SerializerMethodField(read_only=True)
#     net_pay = serializers.SerializerMethodField(read_only=True)
#     benefits = serializers.SerializerMethodField(read_only=True)
#     plans = serializers.SerializerMethodField(read_only=True)
#     payperiod_amount = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = Payroll
#         fields = (
#             'id',
#             'user',
#             'payroll_code',
#             'date_from',
#             'date_to',
#             'total_deduction',
#             'gross_pay',
#             'net_pay',
#             'payperiod_amount',
#             'date_created',
#             'date_updated',
#             'is_sent',
#             'benefits',
#             'plans'
#         )

#     def get_total_deduction(self, instance):
#         return f"{instance.total_deduction:,}"

#     def get_gross_pay(self, instance):
#         return f"{instance.gross_pay:,}"

#     def get_net_pay(self, instance):
#         return f"{instance.net_pay:,}"

#     def get_payperiod_amount(self, instance):
#         return f"{instance.net_pay / 2:,}"

#     def get_benefits(self, instance):
#         return DeductionSerializer(
#             instance.user.deductions.all(), many=True).data

#     def get_plans(self, instance):
#         return PlanSerializer(Plan.objects.filter(
#             user=instance.user,
#         ), many=True).data