<script>
export default {
    data() {
    return {
      state: 0,
      id: 0,
      sort: 0,
      purchased: [],
      topview:[],
      promotion:[],
      customer:[],
      history:[],
      invioce:[],
      report:[],
      view:[],
      waiting_list:[],
      size:[],
      candlet:[],
      colors:[],
      expense:[],
      smell:[],
      customert:[],

    };
  },
    fetchData() {
      const self = this;
       axios
        .get('http://localhost:3000/api/PurchasedItem')
        .then(response => response.data)
        .then(data => {
          self.purchased = data;
        });
        axios
        .get('http://localhost:3000/api/PurchasedItem/TopView')
        .then(response => response.data)
        .then(data => {
          self.topview = data;
        });
        axios
        .get('http://localhost:3000/api/PurchasedItem/promotion')
        .then(response => response.data)
        .then(data => {
          self.promotion = data;
        });
        axios
        .get('http://localhost:3000/api/customers')
        .then(response => response.data)
        .then(data => {
          self.customer = data;
        });
        axios
        .get('http://localhost:3000/api/history')
        .then(response => response.data)
        .then(data => {
          self.history = data;
        });
         axios
        .get('http://localhost:3000/api/invioce')
        .then(response => response.data)
        .then(data => {
          self.invioce = data;
        });
         axios
        .get('http://localhost:3000/api/report')
        .then(response => response.data)
        .then(data => {
          self.report = data;
        });
         axios
        .get('http://localhost:3000/api/view')
        .then(response => response.data)
        .then(data => {
          self.view = data;
        });
         axios
        .get('http://localhost:3000/api/waiting_list')
        .then(response => response.data)
        .then(data => {
          self.waiting_list = data;
        });
        axios
        .get('http://localhost:3000/api/size')
        .then(response => response.data)
        .then(data => {
          self.size = data;
        });
        axios
        .get('http://localhost:3000/api/Candle_type')
        .then(response => response.data)
        .then(data => {
          self.candlet = data;
        });
         axios
        .get('http://localhost:3000/api/Colors')
        .then(response => response.data)
        .then(data => {
          self.colors = data;
        });
         axios
        .get('http://localhost:3000/api/expense')
        .then(response => response.data)
        .then(data => {
          self.expense = data;
        });
         axios
        .get('http://localhost:3000/api/smell')
        .then(response => response.data)
        .then(data => {
          self.smell = data;
        });
          axios
        .get('http://localhost:3000/api/customer_type')
        .then(response => response.data)
        .then(data => {
          self.customert = data;
        });
    }
    }

    
    

</script>

